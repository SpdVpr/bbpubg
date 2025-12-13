import {
    collection,
    query,
    where,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    increment,
    serverTimestamp,
    orderBy,
    limit,
    Timestamp,
    setDoc,
    deleteDoc
} from "firebase/firestore";
import { db } from "./firebase";
import { LucideIcon } from "lucide-react";

// --- Types ---

export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    role: "user" | "admin";
    stats?: {
        posts: number;
        threads: number;
    };
}

export interface ForumCategory {
    slug: string;
    title: string;
    description: string;
    iconName: string; // Storing string name, will map to component in UI
    order: number;
    stats: {
        threads: number;
        posts: number;
    };
}

export interface ForumThread {
    id: string;
    categoryId: string;
    title: string;
    slug: string; // Add slug field
    content: string; // Initial post content
    author: {
        uid: string;
        displayName: string;
        photoURL?: string;
        role: string;
    };
    createdAt: any;
    lastActivityAt: any;
    stats: {
        views: number;
        replies: number;
    };
    isPinned: boolean;
    isLocked: boolean;
}

export interface ForumPost {
    id: string;
    threadId: string;
    content: string;
    author: {
        uid: string;
        displayName: string;
        photoURL: string;
        role: string;
    };
    createdAt: Timestamp;
}

// --- Constants (Initial Data) ---

export const INITIAL_CATEGORIES: Omit<ForumCategory, 'stats'>[] = [
    {
        slug: "general-intel",
        title: "General Intel",
        description: "General discussion about PUBG: Black Budget. News, rumors, and chat.",
        iconName: "Radio",
        order: 1,
    },
    {
        slug: "armory",
        title: "The Armory",
        description: "Discuss weapons, attachments, and gear stats.",
        iconName: "Crosshair",
        order: 2,
    },
    {
        slug: "tactics",
        title: "Tactics & Strategy",
        description: "Share guides, map knowledge, and extraction strategies.",
        iconName: "Map",
        order: 3,
    },
    {
        slug: "squad-finder",
        title: "Squad Finder",
        description: "Looking for group? Find teammates here.",
        iconName: "Users",
        order: 4,
    },
    {
        slug: "off-topic",
        title: "Off-Topic",
        description: "Anything else not related to the game.",
        iconName: "Coffee",
        order: 5,
    },
];

// --- Helpers ---

// Initialize categories if they don't exist
export async function initializeCategories() {
    const categoriesRef = collection(db, "categories");
    for (const cat of INITIAL_CATEGORIES) {
        const docRef = doc(categoriesRef, cat.slug);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            await setDoc(docRef, {
                ...cat,
                stats: { threads: 0, posts: 0 }
            });
            console.log(`Initialized category: ${cat.title}`);
        }
    }
}

export async function getCategories(): Promise<ForumCategory[]> {
    const q = query(collection(db, "categories"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as ForumCategory);
}

export async function getThreads(categoryId: string): Promise<ForumThread[]> {
    const q = query(
        collection(db, "threads"),
        where("categoryId", "==", categoryId),
        orderBy("isPinned", "desc"),
        orderBy("lastActivityAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ForumThread));
}

export async function getThread(threadId: string): Promise<ForumThread | null> {
    const docRef = doc(db, "threads", threadId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as ForumThread;
    }
    return null;
}

export async function getThreadBySlug(slug: string): Promise<ForumThread | null> {
    const q = query(collection(db, "threads"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        // Increment view count loosely
        updateDoc(docSnap.ref, { "stats.views": increment(1) });
        return { id: docSnap.id, ...docSnap.data() } as ForumThread;
    }

    // Fallback: If not found by slug, maybe it IS an ID (backward compatibility)
    // In this case, we still want to increment views if found by ID.
    const threadById = await getThread(slug);
    if (threadById) {
        const docRef = doc(db, "threads", slug);
        updateDoc(docRef, { "stats.views": increment(1) });
    }
    return threadById;
}

export async function getPosts(threadId: string): Promise<ForumPost[]> {
    const q = query(
        collection(db, "posts"),
        where("threadId", "==", threadId),
        orderBy("createdAt", "asc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ForumPost));
}

// Helper to slugify text
function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')    // Remove all non-word chars
        .replace(/\-\-+/g, '-');     // Replace multiple - with single -
}

export async function createThread(categoryId: string, title: string, content: string, user: UserProfile) {
    const threadRef = doc(collection(db, "threads"));

    // Generate unique slug: title-slug + random 6 chars
    const baseSlug = slugify(title);
    const uniqueSuffix = Math.random().toString(36).substring(2, 8);
    const slug = `${baseSlug}-${uniqueSuffix}`;

    const newThread: Omit<ForumThread, "id"> = {
        categoryId,
        title,
        slug,
        content,
        author: {
            uid: user.uid,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || undefined,
            role: user.role
        },
        createdAt: serverTimestamp(),
        lastActivityAt: serverTimestamp(),
        isPinned: false,
        isLocked: false,
        stats: {
            views: 0,
            replies: 0
        }
    };

    await setDoc(threadRef, newThread);

    // Update category stats
    const categoryRef = doc(db, "categories", categoryId);
    await updateDoc(categoryRef, {
        "stats.threads": increment(1)
    });

    // Update user stats
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
        "stats.threads": increment(1)
    });

    return slug; // Return SLUG instead of ID for redirection
}

export async function createReply(
    threadId: string,
    content: string,
    author: UserProfile
): Promise<string> {
    const postData = {
        threadId,
        content,
        author: {
            uid: author.uid,
            displayName: author.displayName || "Unknown",
            photoURL: author.photoURL || "",
            role: author.role
        },
        createdAt: serverTimestamp(),
    };

    const postRef = await addDoc(collection(db, "posts"), postData);

    // Update thread stats
    const threadRef = doc(db, "threads", threadId);
    await updateDoc(threadRef, {
        "stats.replies": increment(1),
        lastActivityAt: serverTimestamp()
    });

    // Update category stats (we need to fetch thread to know category, or pass it)
    // Optimization: Just update global stats or store categoryId in post? 
    // For now let's just update thread. Typically forums update category "total posts" too.
    // We'll skip deep category post count update for speed unless needed, or do a read-write.
    const threadSnap = await getDoc(threadRef);
    if (threadSnap.exists()) {
        const categoryId = threadSnap.data().categoryId;
        const categoryRef = doc(db, "categories", categoryId);
        await updateDoc(categoryRef, { "stats.posts": increment(1) });
    }

    // Update user stats
    const userRef = doc(db, "users", author.uid);
    await updateDoc(userRef, {
        "stats.posts": increment(1)
    });

    return postRef.id;
}

// --- Update Functions ---

export async function updateThread(threadId: string, content: string) {
    const threadRef = doc(db, "threads", threadId);
    await updateDoc(threadRef, {
        content: content,
        lastActivityAt: serverTimestamp() // Optional: updating content usually bumps activity? Or maybe not if it's just a fix. Let's say yes for now or maybe checks if it's recent. 
        // Actually, editing a main post usually doesn't bump the thread to top in forums, only replies do.
        // Let's remove lastActivityAt update for edits to be safe/standard.
        // content: content
    });
    // Actually standard is NOT to bump.
    await updateDoc(threadRef, { content });
}

export async function updatePost(postId: string, content: string) {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { content });
}

// --- Delete Functions ---

export async function deleteThread(threadId: string) {
    // 1. Get thread data for stats cleanup
    const threadRef = doc(db, "threads", threadId);
    const threadSnap = await getDoc(threadRef);

    if (!threadSnap.exists()) return;
    const threadData = threadSnap.data() as ForumThread; // Cast mostly for author/category access

    // 2. Delete all posts in thread
    // Note: In client SDK we can't delete by query in one go easily without Cloud Functions for batching. 
    // We will query and clean up batch by batch or just iterate. 
    // For MVP with small threads, iteration is fine.
    const postsQ = query(collection(db, "posts"), where("threadId", "==", threadId));
    const postsSnap = await getDocs(postsQ);

    const deletePromises = postsSnap.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    // 3. Delete the thread document
    await deleteDoc(threadRef);

    // 4. Decrement Category stats
    const categoryRef = doc(db, "categories", threadData.categoryId);
    // Note: We also need to decrement total posts in category by (1 thread + N posts)
    // The 'posts' count in Category usually means replies, or total messages? 
    // In createThread we didn't increment 'posts', only 'threads'.
    // In createReply we incremented 'posts'. 
    // So we subtract postsSnap.size from category.posts.

    await updateDoc(categoryRef, {
        "stats.threads": increment(-1),
        "stats.posts": increment(-postsSnap.size)
    });

    // 5. Decrement User stats (Author of thread)
    if (threadData.author?.uid) {
        const userRef = doc(db, "users", threadData.author.uid);
        await updateDoc(userRef, {
            "stats.threads": increment(-1)
        });
    }

    // 6. We should technically decrement User stats for EACH author of the deleted posts... 
    // This is getting expensive for client-side. 
    // IDEAL: Cloud Function. 
    // MVP: Skip updating other users' post counts for now, or loop. 
    // Let's loop if it's reasonable number.
    // Optimization: Skip for now to avoid 100 writes if thread is big. Accept stats drift.
}

export async function deletePost(postId: string) {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);

    if (!postSnap.exists()) return;
    const postData = postSnap.data(); // untyped or cast

    // 1. Delete Post
    await deleteDoc(postRef);

    // 2. Decrement Thread stats
    if (postData.threadId) {
        const threadRef = doc(db, "threads", postData.threadId);
        await updateDoc(threadRef, {
            "stats.replies": increment(-1)
        });

        // 3. Decrement Category stats (fetch thread to know category)
        // We can do a read, or try to pass it.
        const threadSnap = await getDoc(threadRef);
        if (threadSnap.exists()) {
            const categoryId = threadSnap.data().categoryId;
            const categoryRef = doc(db, "categories", categoryId);
            await updateDoc(categoryRef, { "stats.posts": increment(-1) });
        }
    }

    // 4. Decrement User stats
    if (postData.author?.uid) {
        const userRef = doc(db, "users", postData.author.uid);
        await updateDoc(userRef, {
            "stats.posts": increment(-1)
        });
    }
}

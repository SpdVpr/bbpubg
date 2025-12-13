"use client";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db } from "@/lib/firebase";
import { uploadImage } from "@/lib/upload";
import { Loader2, Save, User } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
    const { user, userProfile } = useAuth();
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (userProfile) {
            setDisplayName(userProfile.displayName || "");
            setPhotoURL(userProfile.photoURL || "");
        }
    }, [userProfile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        if (!user) return;

        setSaving(true);
        setMessage("");

        try {
            let finalPhotoURL = photoURL;

            if (selectedFile) {
                // Upload avatar to 'avatars' folder
                finalPhotoURL = await uploadImage(selectedFile, "avatars");
            }

            // Update Firestore
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                displayName,
                photoURL: finalPhotoURL
            });

            // Update Firebase Auth Profile (for consistency across apps/sessions)
            await updateProfile(user, {
                displayName: displayName,
                photoURL: finalPhotoURL
            });

            setMessage("Profile updated successfully!");
            window.location.reload();
        } catch (error) {
            console.error("Error updating profile", error);
            setMessage("Failed to update profile.");
        } finally {
            setSaving(false);
        }
    }

    if (!user) {
        return <div className="p-20 text-center text-gray-500">Please sign in to view settings.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold font-oswald uppercase tracking-wide text-white mb-8">
                Profile Settings
            </h1>

            <div className="max-w-2xl bg-[#0f1115] border border-gray-800 rounded-lg p-8">

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden relative border-2 border-cyan-500/30">
                        {previewUrl || photoURL ? (
                            <Image src={previewUrl || photoURL} alt="Avatar" fill className="object-cover" />
                        ) : (
                            <User className="w-12 h-12 text-gray-500 m-auto h-full" />
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">{userProfile?.displayName}</h2>
                        <p className="text-gray-500 text-sm">{userProfile?.email}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-gray-800 text-xs text-gray-300 rounded border border-gray-700 uppercase">
                            {userProfile?.role}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSave} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Display Name / Nickname</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full px-4 py-2 bg-[#1a1c22] border border-gray-800 rounded text-white focus:outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Avatar Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 bg-[#1a1c22] border border-gray-800 rounded text-white focus:outline-none focus:border-cyan-500 text-sm"
                        />
                        <p className="text-xs text-gray-600 mt-1">Upload a new profile picture.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Or Avatar URL (Optional)</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => {
                                setPhotoURL(e.target.value);
                                setSelectedFile(null); // Clear file if URL is manually edited
                                setPreviewUrl("");
                            }}
                            placeholder="https://..."
                            className="w-full px-4 py-2 bg-[#1a1c22] border border-gray-800 rounded text-white focus:outline-none focus:border-cyan-500 text-sm font-mono"
                        />
                    </div>

                    {message && (
                        <div className={`p-3 rounded text-sm ${message.includes("success") ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                            {message}
                        </div>
                    )}

                    <div className="pt-4 border-t border-gray-800">
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded uppercase tracking-wider transition-colors disabled:opacity-50"
                        >
                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

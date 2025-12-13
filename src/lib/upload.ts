import imageCompression from "browser-image-compression";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

export async function compressImage(file: File): Promise<File> {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };
    try {
        const compressedFile = await imageCompression(file, options);
        return compressedFile;
    } catch (error) {
        console.error("Image compression failed:", error);
        return file; // Return original if compression fails
    }
}

export async function uploadImage(file: File, folder: string = "uploads"): Promise<string> {
    try {
        const compressedFile = await compressImage(file);
        const filename = `${uuidv4()}-${compressedFile.name}`;
        const storageRef = ref(storage, `${folder}/${filename}`);

        await uploadBytes(storageRef, compressedFile);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Upload failed:", error);
        throw error;
    }
}

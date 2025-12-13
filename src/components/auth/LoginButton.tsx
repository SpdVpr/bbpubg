"use client";

import { useAuth } from "@/context/AuthContext";
import { LogIn } from "lucide-react";

export default function LoginButton() {
    const { signInWithGoogle } = useAuth();

    return (
        <button
            onClick={signInWithGoogle}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
        >
            <LogIn className="w-4 h-4" />
            Sign in with Google
        </button>
    );
}

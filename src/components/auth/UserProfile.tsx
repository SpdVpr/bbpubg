"use client";

import { useAuth } from "@/context/AuthContext";
import LoginButton from "./LoginButton";
import { User, LogOut, Settings, Shield } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function UserProfile() {
    const { user, userProfile, loading, signOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (loading) {
        return <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse" />;
    }

    if (!user) {
        return <LoginButton />;
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none"
            >
                <div className="relative w-8 h-8 overflow-hidden bg-gray-700 border border-gray-600 rounded-full">
                    {userProfile?.photoURL || user.photoURL ? (
                        <Image
                            src={userProfile?.photoURL || user.photoURL || ""}
                            alt={userProfile?.displayName || user.displayName || "User"}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <User className="w-5 h-5 m-auto text-gray-400" />
                    )}
                </div>
                <span className="hidden text-sm font-medium text-gray-200 md:block">
                    {userProfile?.displayName || user.displayName || "User"}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 z-50 w-48 mt-2 overflow-hidden bg-[#1a1a1e] border border-gray-800 rounded-md shadow-lg"
                    >
                        <div className="px-4 py-3 border-b border-gray-800">
                            <p className="text-sm text-gray-200 truncate">
                                {userProfile?.displayName || user.displayName}
                            </p>
                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                        </div>

                        <div className="py-1">
                            {userProfile?.role === 'admin' && (
                                <Link
                                    href="/admin"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Shield className="w-4 h-4" />
                                    Admin Panel
                                </Link>
                            )}
                            <Link
                                href="/profile"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                <Settings className="w-4 h-4" />
                                Settings
                            </Link>
                            <button
                                onClick={() => {
                                    signOut();
                                    setIsOpen(false);
                                }}
                                className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

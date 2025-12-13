"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import { Bold, Italic, List, ImageIcon, Loader2 } from "lucide-react";
import { uploadImage } from "@/lib/upload";
import { useState } from "react";

interface RichTextEditorProps {
    content: string;
    onChange: (html: string) => void;
    editable?: boolean;
}

export default function RichTextEditor({ content, onChange, editable = true }: RichTextEditorProps) {
    const [isUploading, setIsUploading] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            ImageExtension.configure({
                inline: true,
                allowBase64: true,
            }),
        ],
        content,
        editable,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "prose prose-invert max-w-none focus:outline-none min-h-[150px]",
            },
        },
    });

    if (!editor) {
        return null;
    }

    const addImage = async () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                setIsUploading(true);
                try {
                    // Upload to 'forum_uploads' folder
                    const url = await uploadImage(file, "forum_uploads");
                    editor.chain().focus().setImage({ src: url }).run();
                } catch (error) {
                    console.error("Failed to upload image", error);
                    alert("Failed to upload image.");
                } finally {
                    setIsUploading(false);
                }
            }
        };
        input.click();
    };

    // Drag and drop handler
    const handleDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            setIsUploading(true);
            try {
                const url = await uploadImage(file, "forum_uploads");
                editor.chain().focus().setImage({ src: url }).run();
            } catch (error) {
                console.error("Failed to upload image", error);
            } finally {
                setIsUploading(false);
            }
        }
    };

    return (
        <div
            className="border border-gray-800 rounded-lg overflow-hidden bg-[#1a1c22]"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            {editable && (
                <div className="flex items-center gap-1 p-2 border-b border-gray-800 bg-[#15171b]">
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`p-1.5 rounded hover:bg-gray-700 transition-colors ${editor.isActive("bold") ? "bg-gray-700 text-cyan-400" : "text-gray-400"}`}
                        title="Bold"
                    >
                        <Bold className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`p-1.5 rounded hover:bg-gray-700 transition-colors ${editor.isActive("italic") ? "bg-gray-700 text-cyan-400" : "text-gray-400"}`}
                        title="Italic"
                    >
                        <Italic className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`p-1.5 rounded hover:bg-gray-700 transition-colors ${editor.isActive("bulletList") ? "bg-gray-700 text-cyan-400" : "text-gray-400"}`}
                        title="Bullet List"
                    >
                        <List className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-gray-700 mx-1" />
                    <button
                        type="button"
                        onClick={addImage}
                        disabled={isUploading}
                        className="p-1.5 rounded hover:bg-gray-700 transition-colors text-gray-400 disabled:opacity-50"
                        title="Upload Image"
                    >
                        {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
                    </button>
                </div>
            )}

            <div className="p-4">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

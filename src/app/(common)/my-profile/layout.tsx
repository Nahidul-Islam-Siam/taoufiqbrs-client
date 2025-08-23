/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, LogOut, Settings, SquarePen, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import userImg from "../../../assets/avatar/avarat1.png";
import Link from "next/link";
import EditModal from "@/components/EditModal";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        { label: "Profile", href: "/my-profile/profile", icon: User },
        { label: "History", href: "/my-profile/history", icon: Calendar },
        { label: "Settings", href: "/my-profile/settings", icon: Settings },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-10 mt-20">
                {/* Sidebar */}
                <aside className="w-72 border rounded-md p-5 h-fit sticky top-20">
                    {/* User Info */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={userImg}
                            alt="Profile"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <h2 className="mt-3 text-lg font-semibold">Monica Lucas</h2>
                        <p className="text-sm text-gray-500">monica@rentaly.com</p>

                        <Button
                            variant="link"
                            className="mt-2 text-green-600 flex items-center gap-1"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Edit Profile <SquarePen size={16} />
                        </Button>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-8 space-y-2">
                        {navItems.map(({ label, href, icon: Icon }) => (
                            <Button
                                key={href}
                                asChild
                                variant={pathname === href ? "default" : "ghost"}
                                className={`w-full justify-start ${pathname === href
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : ""
                                    }`}
                            >
                                <Link href={href} className="flex items-center w-full">
                                    <Icon className="mr-2 h-4 w-4" />
                                    {label}
                                </Link>
                            </Button>
                        ))}

                        {/* Logout */}
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-red-600 hover:text-red-700"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1">{children}</main>
            </div>

            {/* Edit Profile Modal */}
            {isModalOpen && <EditModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

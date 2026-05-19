'use client';

import Link from "next/link";
import {
  FaHome,
  FaUserFriends,
  FaCompass,
  FaVideo,
  FaRegUser,
  FaPlus
} from "react-icons/fa";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-60 border-r p-4">
        <h1 className="text-2xl font-bold mb-6">TikTok</h1>

        <nav className="flex flex-col gap-4">

          <Link href="/" className="flex items-center gap-2 hover:text-red-500">
            <FaHome /> Home
          </Link>

          <Link href="/following" className="flex items-center gap-2 hover:text-red-500">
            <FaUserFriends /> Following
          </Link>

          <Link href="/explore" className="flex items-center gap-2 hover:text-red-500">
            <FaCompass /> Explore
          </Link>

          <Link href="/live" className="flex items-center gap-2 hover:text-red-500">
            <FaVideo /> Live
          </Link>

          <Link href="/profile" className="flex items-center gap-2 hover:text-red-500">
            <FaRegUser /> Profile
          </Link>

          <Link href="/upload" className="flex items-center gap-2 hover:text-red-500">
            <FaPlus /> Upload
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>

    </div>
  );
}
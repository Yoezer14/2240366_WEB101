'use client';

import { FaEdit } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="flex items-center gap-6 mb-6">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-gray-300"></div>

        {/* Profile Info */}
        <div>
          <h2 className="text-2xl font-bold">@username</h2>

          <div className="flex gap-6 mt-2 text-sm">
            <span><b>120</b> Following</span>
            <span><b>340</b> Followers</span>
            <span><b>1.2K</b> Likes</span>
          </div>

          <button className="mt-3 flex items-center gap-2 border px-4 py-1 rounded-md">
            <FaEdit /> Edit Profile
          </button>
        </div>

      </div>

      {/* Tabs */}
      <div className="border-b pb-2 mb-4 font-semibold">
        Videos
      </div>

      {/* Empty State */}
      <div className="text-center text-gray-500 p-10 border rounded-lg">
        No videos yet
      </div>

    </div>
  );
}
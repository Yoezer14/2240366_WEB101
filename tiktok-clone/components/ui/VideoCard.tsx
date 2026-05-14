'use client';

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function VideoCard({ post }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm bg-white">
      <h3 className="font-semibold">{post.username}</h3>

      <p className="text-gray-600 mb-2">{post.caption}</p>

      {/* video placeholder */}
      <div className="bg-gray-200 h-64 flex items-center justify-center mb-3">
        Video Placeholder
      </div>

      {/* like button */}
      <button
        onClick={toggleLike}
        className="flex items-center gap-2"
      >
        <FaHeart className={liked ? "text-red-500" : "text-gray-400"} />

        <span>
          {liked ? post.likes + 1 : post.likes}
        </span>
      </button>
    </div>
  );
}
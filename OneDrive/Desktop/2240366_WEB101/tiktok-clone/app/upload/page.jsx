'use client';

import { useState } from "react";

export default function UploadPage() {

  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Video uploaded (demo)");
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Upload Video
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Video Upload */}
        <input
          type="file"
          className="border p-2 w-full"
        />

        {/* Caption */}
        <input
          type="text"
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>

      </form>

    </div>
  );
}
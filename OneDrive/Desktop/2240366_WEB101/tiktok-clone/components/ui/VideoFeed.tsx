'use client';

import VideoCard from "./VideoCard";

const POSTS = [
  {
    id: "1",
    username: "@user1",
    caption: "Cool TikTok video",
    likes: 10
  },
  {
    id: "2",
    username: "@user2",
    caption: "My dancing video",
    likes: 5
  }
];

export default function VideoFeed() {
  return (
    <div className="max-w-[600px] mx-auto mt-6">
      {POSTS.map((post) => (
        <VideoCard key={post.id} post={post} />
      ))}
    </div>
  );
}
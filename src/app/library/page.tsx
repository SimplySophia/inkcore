"use client";

const mockPosts = [
  { id: 1, title: "How AI is Changing Blogging", status: "Draft" },
  { id: 2, title: "Top 10 Social Media Hacks", status: "Published" },
  { id: 3, title: "Content Scheduling Made Easy", status: "Scheduled" },
];

export default function LibraryPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Content Library</h1>
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg bg-gray-50 flex justify-between items-center"
          >
            <span>{post.title}</span>
            <span className="text-sm text-gray-500">{post.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

export default function InsightsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Performance Insights</h1>
      <p className="mb-4">📊 Here’s where you’ll see analytics of your posts.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Reach</h2>
          <p className="text-2xl font-bold">12,340</p>
        </div>
        <div className="p-6 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Engagement</h2>
          <p className="text-2xl font-bold">2,456</p>
        </div>
        <div className="p-6 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Top Post</h2>
          <p className="font-medium">“AI is transforming blogging 🚀”</p>
        </div>
      </div>
    </div>
  );
}

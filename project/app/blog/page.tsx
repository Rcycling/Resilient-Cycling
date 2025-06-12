export default function BlogPage() {
  const posts = [
    {
      title: 'Building a Capsule Wardrobe',
      excerpt: 'Tips on selecting versatile pieces that work for any occasion.',
    },
    {
      title: 'Caring for Your Clothes',
      excerpt: 'Easy ways to keep your favourite items looking new.',
    },
  ];
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Blog</h1>
        {posts.map((p, i) => (
          <article key={i} className="space-y-2 border-b pb-4">
            <h2 className="text-2xl font-semibold text-blue-700">{p.title}</h2>
            <p className="text-gray-600">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

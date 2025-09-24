import { useEffect, useState } from 'react';

export default function BlogLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog.melbetsaffiliates.com/wp-json/wp/v2/posts?per_page=12')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Lỗi tải blog:', err));
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Tin tức & Mẹo cược từ Blog Melbet
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition">
            <h3
              className="text-xl font-semibold text-yellow-300 mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="text-white text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-yellow-400 underline hover:text-yellow-300"
            >
              Đọc tiếp →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

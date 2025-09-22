// pages/blog.js
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog Kèo Sư</title>
        <meta name="description" content="Tin tức, soi kèo, mẹo cược từ Kèo Sư" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Bài viết mới nhất</h1>
        <p>Blog đang được cập nhật. Hãy quay lại sau!</p>
      </main>
    </>
  );
}

import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog Kèo Sư</title>
        <meta name="description" content="Tin tức, soi kèo, nhận định Kèo Sư" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Bài viết mới nhất</h1>
        <p>Những dự đoán được cập nhật. Hãy quay lại sau!</p>
      </main>
    </>
  );
}

import Link from 'next/link';

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-primary text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Afiliate Magazine</h1>
        <Link
          href="https://melbetsaffiliates.com"
          className="text-sm underline hover:text-yellow-300 transition"
        >
          ← Về trang chính
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-4">{children}</main>

     <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-600">
  <div className="mb-2">
    <a
      href="https://blog.melbetsaffiliates.com/blog/"
      className="text-yellow-600 hover:underline font-medium"
    >
      Truy cập Blog Cá Cược & Affiliate
    </a>
  </div>
  <p>© 2025 Melbet Affiliates. All rights reserved.</p>
</footer>

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

      <footer className="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-500">
        © 2025 Afiliate Blog. All rights reserved.
      </footer>
    </div>
  );
}

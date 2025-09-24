import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-20 flex flex-col items-center justify-center">
      {/* Banner giới thiệu */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Chào mừng đến với Melbet Affiliates
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Tham gia chương trình affiliate hàng đầu khu vực, nhận hoa hồng hấp dẫn, công cụ hỗ trợ chuyên nghiệp và chiến lược cá cược hiệu quả.
      </p>

      {/* Nút CTA đăng ký */}
      <Link
        href="/register"
        className="mb-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
      >
        Đăng ký Affiliate Ngay
      </Link>

      {/* Link đến blog WordPress */}
      <Link
        href="https://blog.melbetsaffiliates.com/blog"
        className="text-sm text-yellow-600 underline hover:text-yellow-700 transition"
      >
        Khám phá Blog Cá Cược & Chiến Lược
      </Link>
    </div>
  );
}

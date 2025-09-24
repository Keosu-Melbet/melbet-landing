import BlogLayout from './components/BlogLayout';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold text-yellow-400">Melbet Affiliates</h1>
        <p className="mt-4 text-lg">Tham gia ngay – Kiếm tiền cùng Melbet</p>
      </header>

      <main className="flex flex-col items-center">
        <a
          href="https://melbet.com"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl font-semibold shadow-lg transition"
        >
          Đăng ký ngay
        </a>

        <form
          action="#"
          className="mt-8 flex flex-col space-y-4 bg-gray-800 p-6 rounded-xl w-80 shadow-lg"
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            Gửi thông tin
          </button>
        </form>
      </main>
      <main>...</main>

{/* Nhúng blog WordPress */}
<iframe
  src="https://blog.melbetsaffiliates.com"
  width="100%"
  height="1600"
  style={{ border: 'none' }}
  title="Melbet Blog"
/>

<footer>...</footer>
     

      <BlogLayout />

      <footer className="mt-12 text-gray-400">
        © 2025 Melbet Affiliates. All rights reserved.
      </footer>
    </div>
  );
}

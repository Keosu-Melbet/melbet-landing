import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");

    const payload = new URLSearchParams({
      sheet: "partner",
      name: formData.name,
      email: formData.email,
    });

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzp5Gg8yyOZFKRiFl3-qo9E2fb6GrPR4eMdtngvN3ORZuXpfNwZBy6iP8VqYZH5Q_YY/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      const text = await res.text();
      setStatus("✅ Gửi thành công!");
    } catch (err) {
      setStatus("❌ Lỗi kết nối!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold text-yellow-400">Melbet Affiliates</h1>
        <p className="mt-4 text-lg">Tham gia ngay – Kiếm tiền cùng Melbet</p>
        <a
          href="https://blog.motekaaffiliates.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-yellow-300 underline hover:text-yellow-400"
        >
          Truy cập blog WordPress
        </a>
      </header>

      <main className="flex flex-col items-center">
        <a
          href="https://melbet.com"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl font-semibold shadow-lg transition"
        >
          Đăng ký ngay
        </a>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col space-y-4 bg-gray-800 p-6 rounded-xl w-80 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            Gửi thông tin
          </button>
          <p className="text-sm text-center text-gray-300">{status}</p>
        </form>
      </main>

      <footer className="mt-12 text-gray-400 text-sm">
        © 2025 Melbet Affiliates. All rights reserved.
      </footer>
    </div>
  );
}

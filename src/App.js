import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-yellow-400">Melbet Affiliates</h1>
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
          Đăng ký ngay
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Kiếm tiền cùng Melbet
        </h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Tham gia chương trình Affiliates của Melbet và bắt đầu hành trình tăng
          thu nhập thụ động ngay hôm nay.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
          Đăng ký ngay
        </h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Gửi thông tin
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-400">
        © 2025 Melbet Affiliates. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

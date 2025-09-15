import React from "react";

export default function App() {
  // Hàm xử lý gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      telegram: form.telegram.value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzp5Gg8yyOZFKRiFl3-qo9E2fb6GrPR4eMdtngvN3ORZuXpfNwZBy6iP8VqYZH5Q_YY/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      alert("✅ Thông tin đã được gửi thành công!");
      form.reset();
    } catch (error) {
      alert("❌ Có lỗi xảy ra, vui lòng thử lại!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* HEADER */}
      <header className="w-full flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-yellow-400">Melbet Affiliates</h1>
        <a
          href="#register"
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Đăng ký ngay
        </a>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-10 mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Kiếm tiền cùng Melbet
        </h2>
        <p className="text-lg text-gray-300 max-w-xl">
          Tham gia chương trình Affiliates của Melbet và bắt đầu hành trình tăng
          thu nhập thụ động ngay hôm nay.
        </p>
      </section>

      {/* FORM */}
      <section
        id="register"
        className="flex justify-center items-center px-4 mb-16"
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">
            Đăng ký ngay
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              required
              className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="telegram"
              placeholder="Telegram / WhatsApp (tùy chọn)"
              className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto text-sm text-gray-400 text-center p-4">
        © {new Date().getFullYear()} Melbet Affiliates. All rights reserved.
      </footer>
    </div>
  );
}

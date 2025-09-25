import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
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
      telegram: formData.telegram,
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
      setStatus("✅ Đăng ký thành công!");
    } catch (err) {
      setStatus("❌ Lỗi kết nối!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-bold">Đăng ký Affiliate</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên của bạn"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="telegram"
        placeholder="Telegram (nếu có)"
        value={formData.telegram}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-yellow-500 px-4 py-2 rounded text-white">
        Gửi đăng ký
      </button>
      <p>{status}</p>
    </form>
  );
}

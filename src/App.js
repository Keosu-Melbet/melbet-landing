import React from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow">
        <div className="text-xl font-bold">Melbet Affiliates</div>
        <ul className="flex space-x-6">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-to-join">How to Join</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a
              href="https://blog.motekaaffiliates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#register"
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Register Now
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Chào mừng đến với hệ thống Affiliate Melbet</h1>
        <p className="mb-6">Kiếm tiền dễ dàng cùng Keosu Melbet.</p>

        {/* Form */}
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;

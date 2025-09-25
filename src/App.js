import React from "react";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <div>
      {/* Thanh điều hướng */}
      <nav>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Keosu Melbet</div>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-to-join">How to Join</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a
              href="https://blog.motekaaffiliates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#register" className="button">Register Now</a>
          </li>
        </ul>
      </nav>

      {/* Nội dung chính */}
      <main style={{ padding: "2rem" }}>
        <h1>Chào mừng đến với hệ thống Affiliate Melbet</h1>
        <p>Kiếm tiền dễ dàng cùng Keosu Melbet.</p>

        {/* Form đăng ký */}
        <BlogForm />
      </main>
    </div>
  );
}

export default App;

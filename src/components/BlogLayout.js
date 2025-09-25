import React from "react";

export default function BlogLayout() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new URLSearchParams({
      sheet: "partner",
      name: form.name.value,
      email: form.email.value,
      telegram: form.telegram.value,
    });

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxmIgUeHOfH3xkEpwTK7U8BoGDqp3frUzK_QhyIn75gbUSUr66sYtgDP_UKYsKE5KrZ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formData,
        }
      );

      const text = await res.text();
      alert(
        text.toLowerCase().includes("success")
          ? "✅ Submitted successfully!"
          : "❌ Submission failed."
      );
    } catch (err) {
      alert("❌ Connection error.");
    }
  };

  // Dữ liệu tĩnh
  const features = [
    { title: "High Commission", desc: "Flexible, performance-based rates." },
    { title: "Weekly Payouts", desc: "Clear, consistent weekly payment schedule." },
    { title: "Multiple Withdrawals", desc: "Crypto, bank transfer, Skrill, and more." },
  ];

  const steps = [
    { n: 1, title: "Create a free account", desc: "Fill your basic details and get started instantly." },
    { n: 2, title: "Get your tracking link", desc: "Generate links and track performance from the dashboard." },
    { n: 3, title: "Start promoting", desc: "Publish on YouTube / Telegram / Instagram or your website." },
  ];

  const earning = [
    { title: "YouTube & TikTok", tip: "Review video + bonus code in the description." },
    { title: "Instagram & Facebook", tip: "Quick reels + stories with a tracking link." },
    { title: "Telegram Channels", tip: "Results posts & picks with a clear CTA." },
    { title: "Websites & Blogs", tip: "SEO articles + smart banners." },
  ];

  const payments = ["Crypto", "Bank Transfer", "Skrill", "WebMoney", "Jeton", "More…"];

  const faqs = [
    { q: "Is it free to join?", a: "Yes. Joining is 100% free with no hidden fees." },
    { q: "Do I need a website?", a: "Not required. You can work via YouTube, Telegram, or social media too." },
    { q: "When do I get paid?", a: "Payouts are weekly according to internal policy and review." },
    { q: "Which countries are supported?", a: "It's global; some regions may have local restrictions." },
  ];

  return (
    <div className="bg-white text-zinc-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black grid place-items-center text-amber-400 font-bold">M</div>
            <span className="font-extrabold tracking-tight">Melbet Affiliates</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo("features")} className="hover:text-amber-600">Features</button>
            <button onClick={() => scrollTo("how")} className="hover:text-amber-600">How to Join</button>
            <button onClick={() => scrollTo("earn")} className="hover:text-amber-600">Earning</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-amber-600">FAQ</button>
            <a href="https://blog.melbetsaffiliates.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600">Blog</a>
          </div>
          <a href="#register" className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 rounded-xl font-semibold">Register</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-black mb-4">Join <span className="text-amber-500">Melbet Affiliates</span> and start earning weekly commissions 🚀</h1>
        <p className="text-zinc-600 text-lg mb-6">A flexible affiliate platform for creators, bloggers, and channel owners.</p>
        <div className="flex justify-center gap-4">
          <a href="#register" className="bg-black text-amber-400 px-6 py-3 rounded-xl font-semibold">Start registration</a>
          <button onClick={() => scrollTo("earn")} className="border border-zinc-300 px-6 py-3 rounded-xl font-semibold">Explore earning methods</button>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-center">Why Melbet Affiliates?</h2>
        <p className="text-center text-zinc-600 mt-2">Clear benefits that help you grow your income faster.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition">
              <div className="font-bold text-lg mb-2">{f.title}</div>
              <p className="text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section id="how" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold">How to join — 3 simple steps</h2>
        <div className="mt-8 space-y-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-black text-amber-400 rounded-xl grid place-items-center font-bold">{s.n}</div>
              <div>
                <div className="font-bold">{s.title}</div>
                <p className="text-zinc-600 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EARNING METHODS */}
      <section id="earn" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-center">Earning Methods</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {earning.map((e, i) => (
            <div key={i} className="border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition">
              <div className="font-bold">{e.title}</div>
              <p className="text-zinc-600 text-sm mt-2">{e.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENTS */}
<section id="payments" className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-extrabold text-center">Payment & Withdrawal Methods</h2>
  <p className="text-center text-zinc-600 mt-2">
    Withdraw your earnings easily through multiple secure options.
  </p>

  <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    {payments.map((method, i) => (
      <div
        key={i}
        className="rounded-xl bg-amber-100 text-center text-amber-800 font-semibold py-3 shadow hover:shadow-md transition"
      >
        {method}
      </div>
    ))}
  </div>

  <div className="mt-6 text-center text-xs text-zinc-500">
    * Availability may vary by country and local regulations.
  </div>
</section>

{/* FAQ */}
<section id="faq" className="max-w-3xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-extrabold text-center">Frequently Asked Questions</h2>
  <div className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
    {faqs.map((item, idx) => (
      <details key={idx} className="group p-5">
        <summary className="cursor-pointer list-none flex items-center justify-between">
          <span className="font-semibold">{item.q}</span>
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>
        <p className="mt-3 text-zinc-600 text-sm pl-1">{item.a}</p>
      </details>
    ))}
  </div>
</section>

{/* REGISTER */}
<section id="register" className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid lg:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-extrabold">Ready to start?</h2>
      <p className="text-zinc-600 mt-2">
        Register via the official link or share your details and we'll reach out.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://melbet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-black text-amber-400 hover:text-white px-5 py-3 font-semibold shadow"
        >
          Go to official signup page
        </a>
        <button
          onClick={() => scrollTo("how")}
          className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold hover:border-zinc-400"
        >
          See the steps
        </button>
      </div>
    </div>

    <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Full name</label>
          <input
            name="name"
            required
            type="text"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="e.g., John Smith"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Email</label>
          <input
            name="email"
            required
            type="email"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-zinc-600 mb-1">Telegram (optional)</label>
          <input
            name="telegram"
            type="text"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="@username"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-amber-400 hover:bg-amber-500 text-black px-5 py-3 font-semibold"
      >
        Submit details
      </button>
      <p className="text-xs text-zinc-500 mt-3">
        * Your details will be sent securely to our team.
      </p>
    </form>
  </div>
</section>

{/* CTA STICKY MOBILE */}
<div className="md:hidden fixed bottom-4 inset-x-4 z-40">
  <a
    href="#register"
    className="block text-center rounded-2xl bg-amber-400 text-black font-bold py-3 shadow-xl"
  >
    Register Now
  </a>
</div>

{/* FOOTER */}
<footer className="border-t border-zinc-200 py-10">
  <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-2 text-sm text-zinc-600">
      <div className="w-8 h-8 rounded-xl bg-black grid place-items-center text-amber-400 font-bold">M</div>
      <span>© 2025 Melbet Affiliates</span>
    </div>
    <div className="text-sm text-zinc-500 flex items-center gap-4">
      <a href="#" className="hover:text-zinc-800">Privacy Policy</a>
      <a href="#" className="hover:text-zinc-800">Terms</a>
      <a href="#" className="hover:text-zinc-800">Contact</a>
    </div>
  </div>
</footer>

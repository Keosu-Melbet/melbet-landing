import React from "react";

export default function BlogLayout() {
  const scrollTo = (id) => {
    const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new URLSearchParams({
    sheet: "partner", // tên tab trong Google Sheets
    name: form.name.value,
    email: form.email.value,
    telegram: form.telegram.value,
  });

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycb.../exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formData,
    });

    const text = await res.text();
    alert(text.toLowerCase().includes("success")
      ? "✅ Submitted successfully!"
      : "❌ Submission failed.");
  } catch (err) {
    alert("❌ Connection error.");
  }
};

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    {
      title: "High Commission",
      desc: "Flexible, performance-based rates.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v4h3v2h-3v4h-2v-4H8v-2h3V7h2Z" />
        </svg>
      ),
    },
    {
      title: "Weekly Payouts",
      desc: "Clear, consistent weekly payment schedule.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 14H5V8h14Zm-2-9H7V7h10Z" />
        </svg>
      ),
    },
    {
      title: "Multiple Withdrawals",
      desc: "Crypto, bank transfer, Skrill, and more.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M12 3 2 9l10 6 10-6Zm0 8.197L4.618 9 12 4.803 19.382 9ZM2 15l10 6 10-6-2-1.2L12 19.8 4 13.8Z" />
        </svg>
      ),
    },
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
      const res = await fetch("https://script.google.com/macros/s/AKfycbxmIgUeHOfH3xkEpwTK7U8BoGDqp3frUzK_QhyIn75gbUSUr66sYtgDP_UKYsKE5KrZ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formData,
      });

      const text = await res.text();
      alert(text.includes("Success") ? "✅ Submitted successfully!" : "❌ Submission failed.");
    } catch (err) {
      alert("❌ Connection error.");
    }
  };

  return (
    export default function MelbetAffiliatesLanding() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const features = [
    { title: "High Commission", desc: "Flexible, performance-based rates.", icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v4h3v2h-3v4h-2v-4H8v-2h3V7h2Z"/></svg>
    )},
    { title: "Weekly Payouts", desc: "Clear, consistent weekly payment schedule.", icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 14H5V8h14Zm-2-9H7V7h10Z"/></svg>
    )},
    { title: "Multiple Withdrawals", desc: "Crypto, bank transfer, Skrill, and more.", icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M12 3 2 9l10 6 10-6Zm0 8.197L4.618 9 12 4.803 19.382 9ZM2 15l10 6 10-6-2-1.2L12 19.8 4 13.8Z"/></svg>
    )},
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
    <div dir="ltr" className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black grid place-items-center text-amber-400 font-bold">M</div>
            <span className="font-extrabold tracking-tight">Melbet Affiliates</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('features')} className="hover:text-amber-600">Features</button>
            <button onClick={() => scrollTo('how')} className="hover:text-amber-600">How to join</button>
            <button onClick={() => scrollTo('earn')} className="hover:text-amber-600">Earning methods</button>
            <button onClick={() => scrollTo('payments')} className="hover:text-amber-600">Payments</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-amber-600">FAQ</button>
          </div>
          <a href="#register" className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 font-semibold shadow-sm transition">Register Now</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.5),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.6),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Join <span className="text-amber-500">Melbet Affiliates</span> and start earning weekly commissions 🚀
            </h1>
            <p className="text-zinc-600 text-lg mb-6">
              A flexible affiliate platform for creators, bloggers, and channel owners. Accurate tracking links, a clear dashboard, and multiple withdrawal methods.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#register" className="rounded-xl bg-black text-amber-400 hover:text-white px-5 py-3 font-semibold transition shadow">
                Start registration
              </a>
              <button onClick={() => scrollTo('earn')} className="rounded-xl border border-zinc-300 hover:border-zinc-400 px-5 py-3 font-semibold transition">
                Explore earning methods
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-600">
              <div className="inline-flex items-center gap-2"><span>⚡</span> Real-time performance tracking</div>
              <div className="inline-flex items-center gap-2"><span>🗓️</span> Weekly payouts</div>
              <div className="inline-flex items-center gap-2"><span>🔐</span> Official partnerships</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-zinc-900 to-zinc-700 p-1 shadow-xl">
              <div className="w-full h-full rounded-3xl bg-[conic-gradient(at_70%_30%,#f59e0b,transparent_40%)] grid place-items-center">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-6 w-[90%] max-w-md text-left">
                  <div className="text-xs text-zinc-500">Dashboard • Live</div>
                  <div className="mt-2 text-2xl font-black">$ 3,842.60</div>
                  <div className="text-xs text-zinc-500">Earnings — this week</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="rounded-lg bg-zinc-100 p-3">
                      <div className="font-bold">1,204</div>
                      <div className="text-zinc-500">Visits</div>
                    </div>
                    <div className="rounded-lg bg-zinc-100 p-3">
                      <div className="font-bold">178</div>
                      <div className="text-zinc-500">Signups</div>
                    </div>
                    <div className="rounded-lg bg-zinc-100 p-3">
                      <div className="font-bold">14.8%</div>
                      <div className="text-zinc-500">Conversion</div>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-amber-400"></div>
                  </div>
                  <div className="mt-3 text-xs text-zinc-500">Progress to weekly goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Why Melbet Affiliates?</h2>
        <p className="text-center text-zinc-600 mt-2">Clear benefits that help you grow your income faster and with confidence.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 grid place-items-center mb-3">
                {f.icon}
              </div>
              <div className="font-bold text-lg">{f.title}</div>
              <p className="text-zinc-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section id="how" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">How to join — 3 simple steps</h2>
            <p className="text-zinc-600 mt-2">Get started now and be ready to promote in minutes.</p>
            <div className="mt-8 space-y-4">
              {steps.map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-black text-amber-400 grid place-items-center font-extrabold">{s.n}</div>
                  <div>
                    <div className="font-bold">{s.title}</div>
                    <p className="text-zinc-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#register" className="rounded-xl bg-amber-400 hover:bg-amber-500 text-black px-5 py-3 font-semibold shadow">Register Now</a>
              <button onClick={() => scrollTo('faq')} className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold hover:border-zinc-400">Read FAQ</button>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-6 bg-gradient-to-br from-white to-amber-50">
            <div className="font-bold mb-4">+ Quick tip</div>
            <ul className="space-y-3 text-sm text-zinc-700 list-disc pl-6">
              <li>Enable tracking links on every platform you use.</li>
              <li>Use short, memorable bonus codes.</li>
              <li>Show real results & stories to boost conversions.</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-4 border border-amber-200">
              <div className="text-xs text-zinc-500">Sample tracking link</div>
              <div className="font-mono text-sm select-all break-all">https://melbetaffiliates.com/?ref=YOURID</div>
            </div>
          </div>
        </div>
      </section>

      {/* EARNING METHODS */}
      <section id="earn" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Earning Methods</h2>
        <p className="text-center text-zinc-600 mt-2">Choose the channels that fit you — or combine a few for faster results.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {earning.map((e, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition">
              <div className="font-bold">{e.title}</div>
              <p className="text-zinc-600 text-sm mt-2">{e.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENTS */}
      <section id="payments" className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl bg-zinc-900 text-zinc-100 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">Payment & Withdrawal Methods</h2>
              <p className="text-zinc-300 mt-2">Withdraw your earnings easily through multiple secure options.</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-zinc-900">
                {payments.map((p, i) => (
                  <li key={i} className="rounded-xl bg-amber-400/90 px-4 py-2 font-semibold text-center">{p}</li>
                ))}
              </ul>
              <div className="text-xs text-zinc-400 mt-4">* Options may vary by country and local regulations.</div>
            </div>
            <div className="rounded-2xl bg-zinc-800 p-6">
              <div className="text-sm text-zinc-300">Next payout</div>
              <div className="text-4xl font-black mt-2 text-amber-400">Friday</div>
              <div className="text-xs text-zinc-400">(weekly)</div>
              <div className="mt-6 h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-amber-400"></div>
              </div>
              <div className="text-xs text-zinc-400 mt-2">Progress toward this week's goal</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Frequently Asked Questions</h2>
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
      <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to start?</h2>
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

    {/* FORM DEMO */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Your details have been submitted (demo form).");
      }}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Full name</label>
          <input
            required
            type="text"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="e.g., John Smith"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Email</label>
          <input
            required
            type="email"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-zinc-600 mb-1">Telegram (optional)</label>
          <input
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
        * Demo form for preview. Can be connected later to email/CRM.
      </p>
    </form>
  </div>
</section>

    {/* FORM DEMO */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Your details have been submitted (demo form).");
      }}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Full name</label>
          <input
            required
            type="text"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="e.g., John Smith"
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Email</label>
          <input
            required
            type="email"
            className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-zinc-600 mb-1">Telegram (optional)</label>
          <input
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
        * Demo form for preview. Can be connected later to email/CRM.
      </p>
    </form>
  </div>
</section>

        </div>
      </section>

      {/* CTA STICKY MOBILE */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
        <a href="#register" className="block text-center rounded-2xl bg-amber-400 text-black font-bold py-3 shadow-xl">
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
    </div>
  );
}


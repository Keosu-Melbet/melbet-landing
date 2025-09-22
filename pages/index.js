import Head from 'next/head';
import React from 'react';

export default function MelbetAffiliatesLanding() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxmIgUeHOfH3xkEpwTK7U8BoGDqp3frUzK_QhyIn75gbUSUr66sYtgDP_UKYsKE5KrZ/exec',
        {
          method: 'POST',
          body: data,
        }
      );
      alert('✅ Thông tin đã được gửi thành công!');
      form.reset();
    } catch (error) {
      alert('❌ Có lỗi xảy ra, vui lòng thử lại!');
      console.error(error);
    }
  };

  const features = [
    {
      title: 'High Commission',
      desc: 'Flexible, performance-based rates.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v4h3v2h-3v4h-2v-4H8v-2h3V7h2Z"
          />
        </svg>
      ),
    },
    {
      title: 'Weekly Payouts',
      desc: 'Clear, consistent weekly payment schedule.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 14H5V8h14Zm-2-9H7V7h10Z"
          />
        </svg>
      ),
    },
    {
      title: 'Multiple Withdrawals',
      desc: 'Crypto, bank transfer, Skrill, and more.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M12 3 2 9l10 6 10-6Zm0 8.197L4.618 9 12 4.803 19.382 9ZM2 15l10 6 10-6-2-1.2L12 19.8 4 13.8Z"
          />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      n: 1,
      title: 'Create a free account',
      desc: 'Fill your basic details and get started instantly.',
    },
    {
      n: 2,
      title: 'Get your tracking link',
      desc: 'Generate links and track performance from the dashboard.',
    },
    {
      n: 3,
      title: 'Start promoting',
      desc: 'Publish on YouTube / Telegram / Instagram or your website.',
    },
  ];

  const earning = [
    {
      title: 'YouTube & TikTok',
      tip: 'Review video + bonus code in the description.',
    },
    {
      title: 'Instagram & Facebook',
      tip: 'Quick reels + stories with a tracking link.',
    },
    {
      title: 'Telegram Channels',
      tip: 'Results posts & picks with a clear CTA.',
    },
    {
      title: 'Websites & Blogs',
      tip: 'SEO articles + smart banners.',
    },
  ];

  const payments = [
    'Crypto',
    'Bank Transfer',
    'Skrill',
    'WebMoney',
    'Jeton',
    'More…',
  ];

  const faqs = [
    {
      q: 'Is it free to join?',
      a: 'Yes. Joining is 100% free with no hidden fees.',
    },
    {
      q: 'Do I need a website?',
      a: 'Not required. You can work via YouTube, Telegram, or social media too.',
    },
    {
      q: 'When do I get paid?',
      a: 'Payouts are weekly according to internal policy and review.',
    },
    {
      q: 'Which countries are supported?',
      a: "It's global; some regions may have local restrictions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Melbet Affiliates – Weekly Commissions for Creators</title>
        <meta
          name="description"
          content="Join Melbet Affiliates and earn weekly commissions. Perfect for YouTubers, bloggers, and Telegram channel owners."
        />
        <link rel="canonical" href="https://melbetsaffiliates.com/" />
      </Head>

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
            <button onClick={() => scrollTo('features')}>Features</button>
            <a href="/blog">Blog</a>
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
        <h2 className="text-2xl sm:text-3xl font-extrabold">How to join — 3 simple steps</h2>
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
      </section>

      {/* EARNING METHODS */}
      <section id="earn" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Earning Methods</h2>
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
        <h2 className="text-2xl sm:text-3xl font-extrabold">Payment Methods</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {payments.map((p, i) => (
            <li key={i} className="rounded-xl bg-amber-400/90 px-4 py-2 font-semibold text-center">{p}</li>
          ))}
        </ul>
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
            <p className="text-zinc-600 mt-2">Register via the official link or share your details and we'll reach out.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Full name</label>
                <input required type="text" name="name" className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g., John Smith" />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Email</label>
                <input required type="email" name="email" className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-zinc-600 mb-1">Telegram (optional)</label>
                <input type="text" name="telegram" className="w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="@username" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-xl bg-amber-400 hover:bg-amber-500 text-black px-5 py-3 font-semibold">Submit details</button>
            <p className="text-xs text-zinc-500 mt-3">* Form này sẽ gửi trực tiếp dữ liệu vào Google Sheet của bạn.</p>
          </form>
        </div>
      </section>

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

import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      {/* Header */}
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold text-yellow-400">Melbet Affiliates</h1>
        <p className="mt-4 text-lg text-gray-300">
          Join now and start earning weekly commissions
        </p>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center w-full px-4">
        {/* CTA Button */}
        <a
          href="https://melbet.com"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-xl font-semibold shadow-lg transition"
        >
          Register Now
        </a>

        {/* Registration Form */}
        <form
          action="https://script.google.com/macros/s/AKfycbxmIgUeHOfH3xkEpwTK7U8BoGDqp3frUzK_QhyIn75gbUSUr66sYtgDP_UKYsKE5KrZ/exec"
          method="POST"
          className="mt-8 flex flex-col space-y-4 bg-gray-800 p-6 rounded-xl w-full max-w-sm shadow-lg"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>

        {/* Embedded Blog Section */}
        <section className="mt-16 w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Melbet Affiliates Blog
          </h2>
          <div className="border border-yellow-400 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://blog.melbetsaffiliates.com"
              width="100%"
              height="800"
              style={{ border: 'none' }}
              title="Melbet Blog"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-sm text-center py-6 w-full">
        © 2025 Melbet Affiliates. All rights reserved.
      </footer>
    </div>
  );
}

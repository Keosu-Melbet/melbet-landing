import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Melbet Landing</h1>
      <p>This is the main page deployed on Vercel.</p>
      <Link href="/blog">
        <button style={{ marginTop: "20px", padding: "10px 20px", background: "blue", color: "white" }}>
          Go to Blog
        </button>
      </Link>
    </div>
  )
}

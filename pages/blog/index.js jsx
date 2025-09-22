import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync('posts')
  const posts = files.map(filename => {
    const fileContent = fs.readFileSync(path.join('posts', filename), 'utf8')
    const { data } = matter(fileContent)
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description
    }
  })

  return {
    props: { posts }
  }
}

export default function BlogIndex({ posts }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-xl font-semibold text-amber-600 hover:underline">{post.title}</a>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent)

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default function Blog({ posts }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">📚 Danh sách bài viết</h1>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

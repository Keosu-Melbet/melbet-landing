import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import BlogLayout from '../../components/BlogLayout'

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
    <BlogLayout>
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="text-primary text-xl font-semibold hover:underline">
                {post.title}
              </a>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </BlogLayout>
  )
}

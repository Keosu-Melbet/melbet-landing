import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Head from 'next/head'

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map(file => ({
    params: { slug: file.replace('.md', '') }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const filePath = path.join('posts', `${params.slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      title: data.title,
      description: data.description,
      date: data.date,
      contentHtml
    }
  }
}

export default function BlogPost({ title, description, date, contentHtml }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </>
  )
}

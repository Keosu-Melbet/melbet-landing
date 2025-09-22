import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import BlogLayout from '../../components/BlogLayout'

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
    <BlogLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <article className="prose lg:prose-xl mx-auto py-8">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500">{date}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </BlogLayout>
  )
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Frontmatter {
  slug: string
  date: string
  title: string
  summary: string
  tags: string[]
  // Add other frontmatter properties as needed
}

const POSTS_PATH = path.join(process.cwd(), 'data', 'blog')

export const getMdxContent = async (filename: string) => {
  const filePath = path.join(POSTS_PATH, filename)
  const source = fs.readFileSync(filePath, 'utf8')

  const { data, content } = matter(source)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  const frontmatterData = data as {
    date?: string
    title?: string
    summary?: string
    tags?: string[]
  }

  return {
    contentHtml,
    frontmatter: {
      slug: filename.replace(/\.mdx?$/, ''),
      date: frontmatterData.date || '',
      title: frontmatterData.title || '',
      summary: frontmatterData.summary || '',
      tags: frontmatterData.tags || [],
      // Map other frontmatter properties here
    } as Frontmatter,
  }
}

export const getAllPostSlugs = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => path.replace(/\.mdx?$/, ''))
}

export const getPostBySlug = async (slug: string) => {
  const { contentHtml, frontmatter } = await getMdxContent(`${slug}.mdx`)
  return {
    contentHtml,
    frontmatter: {
      ...frontmatter,
      slug,
    },
  }
}

export const getAllPostsFrontmatter = async () => {
  const slugs = getAllPostSlugs()
  const frontmatters = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostBySlug(slug)
      return frontmatter
    })
  )
  return frontmatters as Frontmatter[]
}

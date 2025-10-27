import Tag from '@/components/Tag'
import Link from 'next/link'
import { slug } from 'github-slugger'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { notFound } from 'next/navigation'
import SectionContainer from '@/components/SectionContainer' // Import SectionContainer

const isProduction = process.env.NODE_ENV === 'production'

export async function generateStaticParams() {
  const tagCounts: Record<string, number> = {}
  allBlogs.forEach((file) => {
    if (file.tags && (isProduction ? !file.draft : true)) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCounts) {
          tagCounts[formattedTag] += 1
        } else {
          tagCounts[formattedTag] = 1
        }
      })
    }
  })

  return Object.keys(tagCounts).map((tag) => ({
    tag,
  }))
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const resolvedParams = { ...params };
  const tag = decodeURI(resolvedParams.tag);
  const filteredBlogPosts = allBlogs.filter(
    (blogPost) => (isProduction ? !blogPost.draft : true) && blogPost.tags && blogPost.tags.map((t) => slug(t)).includes(tag)
  ).sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  if (!filteredBlogPosts.length) {
    notFound()
  }

  return (
    <SectionContainer> {/* Wrap with SectionContainer */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> {/* Changed to text-primary */}
            Tag: {tag}
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((blogPost) => {
            const { slug: blogPostSlug, date, title, summary, tags } = blogPost
            return (
              <li key={blogPostSlug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{new Date(date).toDateString()}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${blogPostSlug}`}
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags &&
                              tags.map((tag: string) => (
                                <Tag key={tag} text={tag} /> // Tag component already handles color and clickability
                              ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${blogPostSlug}`}
                          aria-label={`Read "${title}"`}
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </SectionContainer> // Close SectionContainer
  )
}

import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import SectionContainer from '@/components/SectionContainer' // Import SectionContainer
import { slug } from 'github-slugger' // Import slug

import { getTranslations } from 'next-intl/server';

export default async function BlogPage() {
  const t = await getTranslations('blogPage');
  const isProduction = process.env.NODE_ENV === 'production'
  const blogPosts = allBlogs
    .filter((blogPost) => (isProduction ? !blogPost.draft : true)) // Add this filter
    .sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    )

  return (
    <SectionContainer> {/* Wrap with SectionContainer */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"> {/* Changed to text-primary */}
            {t('title')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t('description')}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!blogPosts.length && t('noPosts')}
          {blogPosts.map((blogPost) => {
            const { slug: blogPostSlug, date, title, summary, tags } = blogPost // Renamed slug to blogPostSlug to avoid conflict
            return (
              <li key={blogPostSlug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{t('publishedOn')}</dt>
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
                                <Link
                                  key={tag}
                                  href={`/tags/${slug(tag)}`} // Made clickable
                                  className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400" // Changed to text-primary
                                >
                                  {tag}
                                </Link>
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
                          {t('readMore')}
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
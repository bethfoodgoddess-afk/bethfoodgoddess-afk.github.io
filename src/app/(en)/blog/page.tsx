"use client"

import { useState } from 'react';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import SectionContainer from '@/components/SectionContainer';
import { slug } from 'github-slugger';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blogPage');
  const isProduction = process.env.NODE_ENV === 'production';
  const blogPosts = allBlogs
    .filter((blogPost) => (isProduction ? !blogPost.draft : true))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const [search, setSearch] = useState('');
  const filteredPosts = blogPosts.filter((post) => {
    const query = search.toLowerCase();
    const content = (post.body?.raw || post.body?.code || '').toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      (post.summary?.toLowerCase() || '').includes(query) ||
      (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query))) ||
      content.includes(query)
    );
  });

  return (
    <SectionContainer>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('title')}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {t('description')}
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder={t('searchPlaceholder') || 'Search posts...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredPosts.length && t('noPosts')}
          {filteredPosts.map((blogPost) => {
            const { slug: blogPostSlug, date, title, summary, tags } = blogPost;
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
                            <Link href={`/blog/${blogPostSlug}`}>
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags &&
                              tags.map((tag) => (
                                <Link
                                  key={tag}
                                  href={`/tags/${slug(tag)}`}
                                  className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400"
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
                        <Link href={`/blog/${blogPostSlug}`} aria-label={`Read "${title}"`}>
                          {t('readMore')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionContainer>
  );
}
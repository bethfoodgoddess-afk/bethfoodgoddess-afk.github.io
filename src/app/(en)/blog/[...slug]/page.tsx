import { allBlogs, allAuthors, Blog } from 'contentlayer/generated' // Import allAuthors


import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-components'
import PostLayout from '@/layouts/PostLayout' // Import PostLayout
import { CoreContent } from 'pliny/utils/contentlayer' // Import CoreContent type

const isProduction = process.env.NODE_ENV === 'production'

export async function generateStaticParams() {
  return allBlogs
    .filter((essay) => (isProduction ? !essay.draft : true))
    .map((essay) => ({
      slug: essay.slug.split('/'),
    }))
}

export default async function EssayPage(props: { params: { slug: string[] } }) {
  const params = await props.params;
  const slugString = params.slug.join('/');
  const essay = allBlogs.find((essay) => essay.slug === slugString) as CoreContent<Blog>;

  if (!essay || (isProduction && essay.draft)) {
    notFound();
  }

  const authorDetails = allAuthors.find((author) => author.name === 'Beth');

  return (
    <PostLayout content={essay} authorDetails={authorDetails ? [authorDetails] : []}>
      <Mdx code={essay.body.code} />
    </PostLayout>
  );
}
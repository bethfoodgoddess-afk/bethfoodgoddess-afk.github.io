import { allAuthors, Authors } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { CoreContent } from 'pliny/utils/contentlayer'

export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    slug: author.slug,
  }))
}

export default async function AuthorPage(props: { params: { slug: string } }) {
  const params = await props.params;
  const slug = params.slug;
  const author = allAuthors.find((author) => author.slug === slug) as CoreContent<Authors>

  if (!author) {
    notFound()
  }

  return (
    <AuthorLayout content={author}>
      <Mdx code={author.body.code} />
    </AuthorLayout>
  )
}

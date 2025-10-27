import Tag from '@/components/Tag'
import Link from 'next/link'
import tagData from '../../tag-data.json'

export default function TagsPage() {
  const tags = Object.keys(tagData)
  const sortedTags = tags.sort((a, b) => tagData[b] - tagData[a])

  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tags
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {tags.length === 0 && 'No tags found.'}
        {sortedTags.map((tag) => (
          <div key={tag} className="mb-2 mr-5">
            <Tag text={tag} />
            <Link
              href={`/tags/${tag}`}
              className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              aria-label={`View posts tagged ${tag}`}
            >
              {` (${tagData[tag]})`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

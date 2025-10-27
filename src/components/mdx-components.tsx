import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import Link from 'next/link'
import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import TableWrapper from '@/components/TableWrapper' // Assuming this component exists or will be created

const components = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}

interface MdxProps {
  code: string
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
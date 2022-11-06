import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      href="/"
      style={{
        // variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt="Buidlers" />
    </Link>
  )
}

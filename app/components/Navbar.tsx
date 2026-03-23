import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 px-8 py-4 flex items-center justify-between">
  <Link href="/" className="text-xl font-bold text-white">
    MyStore
  </Link>

  <div className="flex gap-6">
    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
      Home
    </Link>
    <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
      Products
    </Link>
    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
      About
    </Link>
  </div>
</nav>
  )
}
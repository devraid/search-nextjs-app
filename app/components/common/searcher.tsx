'use client'
/**
 * @author Miguel Chumillas.
 * @description Searcher Component.
 */

/** Dependencies. */
import Link from 'next/link'
import { Search as LucideSearch, X as LucideX } from 'lucide-react'
import Image from '@/app/components/image'
import { useRouter } from 'next/navigation'
import { useState, KeyboardEvent } from 'react'

/** Interface for SearcherProps. */
interface SearcherProps {
  showInline?: boolean
}

/**
 * Searcher Component.
 *
 * @param {SearcherProps} props - Component props.
 * @returns {JSX.Element} - The rendered component.
 */
const Searcher = ({ showInline = false }: SearcherProps): JSX.Element => {
  const router = useRouter()
  const [query, setQuery] = useState<string>('')

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && query.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const clearQuery = (): void => {
    setQuery('')
  }

  return (
    <div
      className={`w-full ${showInline ? 'flex items-center gap-4' : 'flex flex-col items-center justify-center min-h-screen'}`}
    >
      {/* Logo (Only for centered layout) */}
      {!showInline && (
        <Link
          href="/"
          aria-label="Go to Home"
        >
          <Image
            className="mb-6"
            src="/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            width={272}
            height={92}
          />
        </Link>
      )}

      {/* Search Bar Container */}
      <div className={`relative w-full max-w-md ${showInline ? 'flex items-center gap-4' : ''}`}>
        {/* Logo (Only for inline layout) */}
        {showInline && (
          <Link
            href="/"
            aria-label="Go to Home"
          >
            <Image
              src="/googlelogo_color_272x92dp.png"
              alt="Google Logo"
              width={100}
              height={34}
            />
          </Link>
        )}

        <div className="relative w-full">
          <LucideSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={15}
            aria-hidden="true"
          />
          <input
            type="text"
            id="search"
            placeholder=""
            className="w-full pl-10 pr-10 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md text-sm"
            aria-label="Search"
            role="searchbox"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {query && (
            <LucideX
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              size={20}
              onClick={clearQuery}
              aria-label="Clear search"
              role="button"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Searcher

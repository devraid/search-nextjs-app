'use client'
/**
 * @author Miguel Chumillas.
 * @description Search Results Page.
 */

/** Dependencies. */
import { useState, useEffect } from 'react'
import Header from '@/app/components/layout/header'
import SearchResultItem from '@/app/components/search/item'
import SearchResultItemDetails from '@/app/components/search/details'
import { AnimalData } from '@/app/types'
import { useSearchParams } from 'next/navigation'

/**
 * Fetch search results from the API.
 *
 * @param {string} query - The search query.
 * @returns {Promise<AnimalData[]>} - A promise resolving to an array of animal data.
 */
const fetchResults = async (query: string): Promise<AnimalData[]> => {
  try {
    const res = await fetch(`http://localhost:3000/api/search/${query}`)
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

/**
 * SearchResults component.
 * Displays search results based on the query parameter.
 */
const SearchResults = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.trim().toLowerCase() || ''
  const [results, setResults] = useState<AnimalData[]>([])
  const [selectedItem, setSelectedItem] = useState<AnimalData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setSelectedItem(null)
      const data = await fetchResults(query)
      setResults(data)
      setLoading(false)
    }
    fetchData()
  }, [query])

  return (
    <>
      {/* Header */}
      <Header showSearch={true} />

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Results List */}
        <div className="md:w-2/3">
          {!loading && results.length === 0 ? (
            <p
              role="alert"
              className="text-xs mt-2"
            >
              {query && (
                <>
                  No results found for <span className="font-bold">&apos;{query}&apos;</span>.
                  <br />
                  <br />
                </>
              )}
              Try looking for:{' '}
              <span className="font-bold">
                Insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird.
              </span>
            </p>
          ) : (
            <ul
              className="space-y-6"
              role="list"
            >
              {results.map((item, index) => (
                <SearchResultItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  onClick={() => setSelectedItem(item)} // Handle click
                />
              ))}
            </ul>
          )}
        </div>

        {/* Details Panel (Visible on Large Screens) */}
        {selectedItem && (
          <div className="hidden md:block md:w-1/3">
            <div className="border border-gray-300 p-3">
              <SearchResultItemDetails
                title={selectedItem.title}
                description={selectedItem.description}
                url={selectedItem.url}
                image={selectedItem.image}
              />
            </div>
          </div>
        )}
      </div>

      {/* Modal for Small Screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 p-4 flex justify-center items-center ${selectedItem ? 'block' : 'hidden'} md:hidden`}
        onClick={() => setSelectedItem(null)}
      >
        <div className="bg-white p-3 max-w-md w-full relative">
          {selectedItem && (
            <SearchResultItemDetails
              title={selectedItem.title}
              description={selectedItem.description}
              url={selectedItem.url}
              image={selectedItem.image}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default SearchResults

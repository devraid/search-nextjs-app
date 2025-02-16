/**
 * @author Miguel Chumillas.
 * @description Search Results Page.
 */

/** Dependencies. */
import Header from '@/app/components/layout/header'
import SearchResultItem from '@/app/components/search/item'
import { notFound } from 'next/navigation'

/** Interface for AnimalData. */
interface AnimalData {
  title: string
  description: string
  url: string
  image: string
}

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
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.searchParams - URL search parameters.
 * @param {string} [props.searchParams.q] - The search query parameter.
 * @returns {JSX.Element} - The rendered search results page.
 */
const SearchResults = async ({ searchParams }: { searchParams: { q?: string } }): Promise<JSX.Element> => {
  const query = searchParams.q?.trim().toLowerCase() || ''
  if (!query) return notFound()

  const results = await fetchResults(query)

  return (
    <>
      {/* Header */}
      <Header showSearch={true} />

      <div
        className="max-w-2xl mx-auto p-6"
        role="main"
        aria-labelledby="search-results-heading"
      >
        {/* Results List */}
        {results.length === 0 ? (
          <p role="alert">No results found.</p>
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
              />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default SearchResults

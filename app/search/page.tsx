/**
 * @author Miguel Chumillas.
 * @description Search Results Page.
 */

/** Dependencies. */
import Header from '@/app/components/layout/header'
import SearchResultItem from '@/app/components/search/item'
import { AnimalData } from '@/app/types'

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
 * @returns {JSX.Element} - The rendered search results page.
 */
const SearchResults = async (props: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [q: string]: string }>
}): Promise<JSX.Element> => {
  const searchParams = await props.searchParams
  const { q } = searchParams
  const query = q?.trim().toLowerCase() || ''
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
          <>
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
          </>
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

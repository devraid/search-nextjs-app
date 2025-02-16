/**
 * @author Miguel Chumillas.
 * @description Search Result Item Component.
 */

/** Interface for component props. */
interface SearchResultItemProps {
  title: string
  description: string
  url: string
}

/**
 * SearchResultItem component.
 * Represents an individual search result item.
 *
 * @param {SearchResultItemProps} props - Component properties.
 * @returns {JSX.Element} - The rendered list item.
 */
const SearchResultItem: React.FC<SearchResultItemProps> = ({ title, description, url }): JSX.Element => {
  return (
    <li
      className="pb-2"
      role="listitem"
    >
      {/* URL on Top */}
      <p
        className="text-xs text-gray-500 mb-1"
        aria-label={`Source: ${url}`}
      >
        {url}
      </p>
      {/* Title as Link */}
      <h2 className="text-base font-semibold mb-1">
        <a
          href={url}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read more about ${title}`}
        >
          {title}
        </a>
      </h2>
      {/* Description */}
      <p className="text-gray-700 text-sm leading-4">{description}</p>
    </li>
  )
}

export default SearchResultItem

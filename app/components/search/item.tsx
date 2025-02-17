/**
 * @author Miguel Chumillas.
 * @description Search Result Item Component.
 */

/** Interface for component props. */
interface SearchResultItemProps {
  title: string
  description: string
  url: string
  onClick: () => void
}

/**
 * SearchResultItem component.
 * Represents an individual search result item.
 *
 * @param {SearchResultItemProps} props - Component properties.
 * @returns {JSX.Element} - The rendered list item.
 */
const SearchResultItem: React.FC<SearchResultItemProps> = ({
  title,
  description,
  url,
  onClick,
}: SearchResultItemProps): JSX.Element => {
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
          className="text-blue-600 hover:underline cursor-pointer"
          rel="noopener noreferrer"
          aria-label={`Read more about ${title}`}
          onClick={onClick}
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

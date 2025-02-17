/**
 * @author Miguel Chumillas.
 * @description Search Result Item Details Component.
 */

/** Dependencies. */
import Image from '@/app/components/image'
import { AnimalData } from '@/app/types'

/** Interface for component props. */
type SearchResultItemDetailsProps = Omit<AnimalData, 'id'>

/**
 * SearchResultItemDetails component.
 * Represents an search details for a given item.
 *
 * @param {SearchResultItemDetailsProps} props - Component properties.
 * @returns {JSX.Element} - The rendered list item.
 */
const SearchResultItemDetails: React.FC<SearchResultItemDetailsProps> = ({
  title,
  description,
  url,
  image,
}: SearchResultItemDetailsProps): JSX.Element => {
  return (
    <>
      {/* Image on Top */}
      <Image
        className="w-full mb-2"
        src={image}
        alt={title}
        width={272}
        height={92}
      />
      {/* URL */}
      <p
        className="text-xs text-gray-500 mb-1"
        aria-label={`Source: ${url}`}
      >
        {url}
      </p>
      {/* Title */}
      <h2 className="text-base font-semibold mb-1">{title}</h2>
      {/* Description */}
      <p className="text-gray-700 text-sm leading-4">{description}</p>
    </>
  )
}

export default SearchResultItemDetails

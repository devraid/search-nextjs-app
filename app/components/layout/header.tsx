/**
 * @author Miguel Chumillas.
 * @description Header Component.
 */

/** Dependencies. */
import Searcher from '@/app/components/common/searcher'
import { Grid } from 'lucide-react'

/**
 * Header component.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.showSearch - Determines if the search bar should be visible.
 * @returns {JSX.Element} - The rendered component.
 */
const Header: React.FC<{ showSearch: boolean }> = ({ showSearch = true }): JSX.Element => {
  return (
    <header
      className="flex justify-between items-center px-4 py-2 w-full border-b border-gray-300"
      role="banner"
    >
      {/* Left Side: Searcher (if enabled) */}
      {showSearch && (
        <div className="flex-grow">
          <Searcher showInline={true} />
        </div>
      )}

      {/* Right Side: Apps Icon & Avatar */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Google Apps Icon */}
        <div
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          role="button"
          aria-label="Google Apps"
        >
          <Grid
            size={24}
            className="text-gray-400"
            aria-hidden="true"
          />
        </div>

        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer"
          role="button"
          aria-label="User Profile"
        ></div>
      </div>
    </header>
  )
}

export default Header

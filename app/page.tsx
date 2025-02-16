/**
 * @author Miguel Chumillas.
 * @description Home Page.
 */

/** Dependencies. */
import Header from '@/app/components/layout/header'
import Searcher from '@/app/components/common/searcher'

/**
 * HomePage.
 *
 * @returns {JSX.Element} - The rendered page.
 */
const HomePage = (): JSX.Element => {
  return (
    <>
      {/* Header */}
      <Header showSearch={false} />
      {/* Search */}
      <Searcher showInline={false} />
    </>
  )
}

export default HomePage

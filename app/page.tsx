/**
 * @author Miguel Chumillas.
 * @description Homepage.
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
      <Searcher />
    </>
  )
}

export default HomePage

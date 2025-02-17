/**
 * @author Miguel Chumillas.
 * @description HomePage Test.
 */

/** Dependencies. */
import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

/** Mock the Header component */
jest.mock('@/app/components/layout/header', () => {
  return jest.fn(({ showSearch }) => <div data-testid="header">{showSearch ? 'Visible Header' : 'Hidden Header'}</div>)
})

/** Mock the Searcher component */
jest.mock('@/app/components/common/searcher', () => {
  return jest.fn(({ showInline }) => (
    <div data-testid="searcher">{showInline ? 'Inline Searcher' : 'Full Searcher'}</div>
  ))
})

describe('HomePage', () => {
  it('renders the page with header hidden and searcher visible', () => {
    render(<HomePage />)

    // Verify Header is hidden by checking the text
    const header = screen.getByTestId('header')
    expect(header).toHaveTextContent('Hidden Header')

    // Verify Searcher is present
    const searcher = screen.getByTestId('searcher')
    expect(searcher).toBeInTheDocument()
  })
})

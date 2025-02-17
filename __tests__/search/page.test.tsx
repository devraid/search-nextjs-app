/**
 * @author Miguel Chumillas.
 * @description SearchResults Page Test.
 */

/** Dependencies. */
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import SearchResults from '@/app/search/page'

// Mock the useSearchParams hook to simulate the query parameter 'q' as 'cat'
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue('cat'),
  }),
}))

// Mock the Header component
jest.mock('@/app/components/layout/header', () => {
  return jest.fn(({ showSearch }) => <div data-testid="header">{showSearch ? 'Visible Header' : 'Hidden Header'}</div>)
})

// Mock the global fetch function
global.fetch = jest.fn()

describe('SearchResults', () => {
  it('renders the page with search results when animal is found', async () => {
    // Mock data to be returned by fetch
    const mockData = [
      {
        id: 1,
        title: 'Cat 1',
        description: 'A cute cat',
        url: 'https://example.com/cat1',
        image: 'https://example.com/cat1.jpg',
      },
      {
        id: 2,
        title: 'Cat 2',
        description: 'Another cute cat',
        url: 'https://example.com/cat2',
        image: 'https://example.com/cat2.jpg',
      },
    ]

    // Mock the fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    render(<SearchResults />)

    // Wait for the results to load
    await waitFor(() => screen.getByText('Cat 1'))

    // Verify the header is visible
    const header = screen.getByTestId('header')
    expect(header).toHaveTextContent('Visible Header')

    // Verify that search results are displayed
    const resultItems = screen.getAllByRole('listitem')
    expect(resultItems.length).toBe(mockData.length)
    expect(screen.getByText('Cat 1')).toBeInTheDocument()
    expect(screen.getByText('Cat 2')).toBeInTheDocument()
  })
})

/**
 * @author Miguel Chumillas.
 * @description Root layout for the application.
 */

/** Dependencies. */
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/globals.scss'

/** Fonts Configuration. */
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

/** Metadata Configuration. */
export const metadata: Metadata = {
  title: 'Search App',
  description: 'A Search app built with Next.js',
}

/** Viewport. */
export const viewport = 'width=device-width, initial-scale=1'

/**
 * Root layout component wrapping all pages.
 *
 * @param {Readonly<{ children: ReactNode }>} props - Layout properties.
 * @returns {JSX.Element} - The root layout structure.
 */
const RootLayout: React.FC<Readonly<{ children: ReactNode }>> = ({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="container mx-auto">
        {/* Children */}
        {children}
      </div>
    </body>
  </html>
)

export default RootLayout

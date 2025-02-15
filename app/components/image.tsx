'use client'
/**
 * @author Miguel Chumillas.
 * @description Image Component.
 */

/** Dependencies. */
import NextImage, { ImageProps as NextImageProps } from 'next/image'

/** Custom loader. */
const customLoader = ({ src }: { src: string }) => {
  return src
}

/**
 * Image.
 *
 * @returns {JSX.Element} - The rendered component.
 */
const Image = (props: NextImageProps): JSX.Element => {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      unoptimized
      priority
    />
  )
}

export default Image

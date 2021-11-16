import { useState } from 'react'

import { base64 } from './fallback'
import useIntersection from '../../hooks/useIntersection'

import styles from './image.module.css'

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  fallback?: string
}

const Imagen = ({
  src,
  alt,
  className,
  fallback = base64,
  ...props
}: ImageProps) => {
  const { ref, load } = useIntersection()
  const [imgload, setImgload] = useState(false)

  const wrapStyles = [
    'aspect-w-16 aspect-h-9',
    className,
    styles.image_container
  ]
  const thumbStyles = [styles.thumb, imgload ? styles.thumb_hidden : '']
  const imageStyles = [styles.image, imgload ? styles.image_loaded : '']

  const Img = () => (
    <>
      <img
        alt={alt}
        loading="lazy"
        src={fallback}
        className={thumbStyles.join(' ')}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={imageStyles.join(' ')}
        onLoad={() => setImgload(true)}
      />
    </>
  )

  return (
    <div {...props} ref={ref} className={wrapStyles.join(' ')}>
      {load ? <Img /> : null}
    </div>
  )
}

export default Imagen

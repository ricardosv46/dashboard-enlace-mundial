import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const useIntersection = () => {
  const { ref, inView } = useInView()
  const [load, setLoad] = useState()

  useEffect(() => {
    if (inView) setLoad(true)
  }, [inView])

  return { ref, load }
}

export default useIntersection

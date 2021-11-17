import { useEffect } from 'react'

const UseClick = ({ onClick = () => {} }) => {
  useEffect(() => {
    document.body.addEventListener('click', () => {
      onClick()
    })
  }, [])
  return <div></div>
}

export default UseClick

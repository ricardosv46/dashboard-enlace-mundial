import { createContext, useState } from 'react'

export const ImgContext = createContext(null)

const ImageState = ({ children }) => {
  const [img, setImg] = useState({})
  return (
    <ImgContext.Provider value={{ img, setImg }}>
      {children}
    </ImgContext.Provider>
  )
}
export default ImageState

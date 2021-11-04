import { createContext, useState } from 'react'

export const ImgContext = createContext(null)

const ImageState = ({ children }) => {
  const [img, setImg] = useState({})
  const [listGaleria, setListGaleria] = useState([{}])
  return (
    <ImgContext.Provider value={{ img, setImg, listGaleria, setListGaleria }}>
      {children}
    </ImgContext.Provider>
  )
}
export default ImageState

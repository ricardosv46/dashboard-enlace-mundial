import React from 'react'

const index = () => {
  return (
    <>
      <div className="drag-area border-dashed h-160 w-100">
        <h2>Arrastra y suelta Imágenes</h2>
        <span>O</span>
        <button>Seleccionas tus archivos</button>
        <input type="file" name="" hidden multiple />
      </div>
      <div className="preview"></div>
    </>
  )
}

export default index

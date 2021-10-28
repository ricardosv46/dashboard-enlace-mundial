import React from 'react'
import './Modal.css'
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <article className={`modal ${isOpen && 'isOpen'}`} onClick={closeModal}>
      <div className="modalContainer" onClick={handleModalClick}>
        <button className="modalClose" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  )
}

export default Modal

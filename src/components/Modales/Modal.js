import ReactDOM from 'react-dom'
import styles from './modal.module.css'

const Modal = ({ children, isOpen, closeModal }) => {
  console.log('modal open 3 ', isOpen)

  if (!isOpen) return <div />

  return ReactDOM.createPortal(
    <article className={styles.modal}>
      <div className={styles.modal_overlay} onClick={closeModal} />
      <div className={styles.modal_content}>
        <button className={styles.modal_closeBtn} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('portales')
  )
}

export default Modal

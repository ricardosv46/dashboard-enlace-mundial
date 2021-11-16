import Modal from './Modal'
import Imagen from '../Image'
import useGaleriaServices from '../../services/useGaleriaServices'

const ModalSelectImage = ({
  isOpen,
  onChange = () => {},
  closeModal = () => {}
}) => {
  console.log('modal open 2 ', isOpen)
  const { imagenes } = useGaleriaServices()

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="bg-white rounded p-5 w-screen-9/10 h-screen-9/10">
        <h2 className="mb-5">Selecciona una imagen</h2>

        <div className="grid grid-cols-auto gap-3">
          {imagenes.map((image) => (
            <Imagen
              key={`modal-image-${image.id}`}
              src={image.url}
              alt={image.descripcion}
              onClick={() => onChange(image)}
              className="rounded cursor-pointer transform hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalSelectImage

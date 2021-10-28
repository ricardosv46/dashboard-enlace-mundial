import React from 'react'
import { useModal } from '../../hooks/useModal'
import Modal from './Modal'

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  // const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  return (
    <div>
      <h2>modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal
        isOpen={isOpenModal1}
        closeModal={closeModal1}
      >
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <p>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam id eveniet ratione odio, error unde doloribus, deserunt quas ducimus quos corporis corrupti? Quis excepturi, distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam magni dolorem est? Debitis quia officia in provident consequatur totam magnam modi, ab necessitatibus, tempore fugit dolores molestiae minima praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam nobis esse consequuntur aut ut enim, inventore laboriosam adipisci quos aperiam, sit repellendus explicabo tempora amet quibusdam fugit? Laborum, maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nihil dolore cumque. Quod porro delectus nobis ea magnam commodi aspernatur, explicabo quidem rem tenetur quibusdam. Maxime expedita nobis nemo cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium veritatis id reprehenderit magnam pariatur doloribus animi, sapiente iure, debitis culpa excepturi esse eius consectetur voluptates quasi laborum beatae! Voluptas. suscipit delectus perspiciatis praesentium? ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime temporibus rerum, expedita vero nostrum illum nulla natus reprehenderit ipsa amet. Dolore non eaque eum itaque reiciendis sed ea nesciunt!</p>
      </Modal>
      {/* <Modal>
        <h3>Modal 2</h3>
        <p>Hola ese es el contenido de mi modal 2</p>
      </Modal>
      <Modal>
        <h3>Modal 3</h3>
        <p>Hola ese es el contenido de mi modal 3</p>
      </Modal> */}
    </div>
  )
}

export default Modals

import { useState, useEffect } from 'react'
// import iconEditar from '../../assets/imgs/icon_editar.svg'
import { IconCalendar, IconDelete, IconEdit } from '../../assets/icons/icons'
const BtnAccionesCalendary = ({
  handleDelete = () => alert('Eliminar'),
  handleEdit = () => alert('Editar'),
  handleCalendary = () => alert('Calendario')
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  useEffect(() => {
    setShow(false)
  }, [handleDelete])
  return (
    <div className="mx-auto w-8 flex flex-col  items-center  text-center ">
      <p
        className={`${
          show ? 'text-black' : 'text-gray-500'
        } text-4xl w-5 text-center  flex flex-col cursor-pointer justify-center z-80 relative`}
        onClick={handleClick}
      >
        <span className="-mt-4 ">.</span>
        <span className="-mt-10 ">.</span>
        <span className="-mt-10 ">.</span>
      </p>
      {show && (
        <div className="absolute flex justify-end bg-transparent border  z-70 top-0 left-0 min-w-full h-full">
          <div className=" flex justify-center items-center w-40 h-16 mr-18 sm:mr-20 mt-5  shadow-lg rounded-lg bg-white">
            <p
              className="  cursor-pointer  py-2  px-3 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleEdit()}
            >
              <IconEdit />
            </p>
            <p
              className="flex cursor-pointer py-2 px-3 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleCalendary()}
            >
              <IconCalendar />
            </p>
            <p
              className="flex cursor-pointer py-2 px-3 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleDelete()}
            >
              <IconDelete />
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BtnAccionesCalendary

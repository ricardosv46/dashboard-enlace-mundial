import { useState } from 'react'

const InputToggle = ({ status = true }) => {
  const [state, setState] = useState(status)

  const handleChange = () => setState((prev) => !prev)
  console.log(handleChange)

  return (
    <label
      // htmlFor="toggle"
      className="flex items-center cursor-pointer justify-center"
    >
      <div className="relative">
        <input
          type="checkbox"
          // id="toggle"
          className="sr-only"
          onClick={handleChange}
        />
        <div
          className={`block ${
            state ? 'bg-primary' : 'bg-accent'
          }  w-14 h-7 rounded-full`}
        ></div>
        <div
          className={` absolute left-1 top-1  w-5 h-5 rounded-full transition ${
            state ? ' transform translate-x-full bg-white' : ' bg-primary'
          } `}
        ></div>
      </div>
    </label>
  )
}
export default InputToggle

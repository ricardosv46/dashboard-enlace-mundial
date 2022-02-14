import { useState } from 'react'

const InputToggle = ({ status = false, ...props }) => {
  const [state, setState] = useState(status)

  const handleChange = () => setState((prev) => !prev)

  return (
    <label
      // htmlFor="toggle"
      className="cursor-pointer "
    >
      <div className="relative z-50   ">
        <input
          type="checkbox"
          // id="toggle"
          className="sr-only"
          onClick={handleChange}
          {...props}
        />
        <div
          className={`block ${
            state ? 'bg-primary' : 'bg-accent'
          }  w-14 h-7 rounded-full`}
        ></div>
        <div
          className={` absolute left-2 top-1  w-5 h-5 rounded-full transition ${
            state ? ' transform translate-x-full bg-white' : ' bg-primary-400'
          } `}
        ></div>
      </div>
    </label>
  )
}
export default InputToggle

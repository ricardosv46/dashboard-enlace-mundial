const Counter = ({ value = 0, onSuma = () => {}, onResta = () => {} }) => {
  return (
    <div className="flex">
      <button className="px-4 py-2 bg-blue-500 " onClick={onSuma}>
        -
      </button>
      <div>
        <h1>{value}</h1>
      </div>
      <button className="px-4 py-2 bg-blue-500 " onClick={onResta}>
        +
      </button>
    </div>
  )
}

export default Counter

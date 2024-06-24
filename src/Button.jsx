

function Button() {

  const handleClick = (e) => e.target.textContent = "OOUGH!";
  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click Me </button>
  )
}

export default Button

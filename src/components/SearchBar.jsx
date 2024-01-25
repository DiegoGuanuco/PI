export default function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    const id = event.target.value;
    return id;
  };

  const getChar = (event) => {
   event.preventDefault()
   onSearch(handleChange)
  }

  return (
    <form onSubmit={getChar}>
      <input type="search" onChange={handleChange} />
      <button>Agregar</button>
    </form>
  );
}

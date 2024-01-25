import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


function Nav({ onSearch }) {


  return (
    <>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </>
  );
}

export default Nav;

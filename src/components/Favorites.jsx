import { useSelector } from "react-redux";
import Card from "./Card";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  console.log(favorites);

  return (
    <div>
      {favorites.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name ? char.name : "Name"}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin ? char.origin.name : "Unknown Origin"}
          image={char.image}
        />
      ))}
    </div>
  );
}

export default Favorites;

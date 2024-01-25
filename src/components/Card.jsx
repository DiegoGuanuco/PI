import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(id, name, status, species, gender, origin, image));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [dispatch]);

  return (
    <div key={id}>

      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

      <button onClick={() => onClose()}>X</button>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="Imagen del personaje" />
    </div>
  );
}

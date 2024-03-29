import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

export const addFav = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
}) => {
  return {
    type: ADD_FAV,
    payload: { id, name, status, species, gender, origin, image },
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

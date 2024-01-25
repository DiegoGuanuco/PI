import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import NotFound from "./components/NotFound.jsx";
import Form from "./components/Form.jsx";
import Favorites from './components/Favorites.jsx'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "diego@gmail.com";
  const PASSWORD = "123asd";

  const location = useLocation();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
 
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    const char = res.data

    setCharacters([...characters, char]);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

   // const example = {
    //   id: 1,
    //   name: "Rick Sanchez",
    //   status: "Alive",
    //   species: "Human",
    //   gender: "Male",
    //   origin: {
    //     name: "Earth (C-137)",
    //     url: "https://rickandmortyapi.com/api/location/1",
    //   },
    //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    // };
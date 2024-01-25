import { useState } from "react";
import { validation } from "./utils/validation";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">Contraseña</label>
      <input
        type="text"
        name="password"
        id="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <button
        disabled={
          !userData.email ||
          !userData.password ||
          errors.password ||
          errors.email
        }
      >
        Submit
      </button>
    </form>
  );
}

export default Form;

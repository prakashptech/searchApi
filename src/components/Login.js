import React, { useState } from "react";
const Login = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up Form</h1>
      <label>name: </label>
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <label>emai: </label>
      <input type="email" name="email" onChange={handleChange} />
      <br />
      <label>password: </label>
      <input type="password" name="password" onChange={handleChange} />
      <br />
      <label>address: </label>
      <textarea name="address" onChange={handleChange}></textarea>
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        surname,
        email,
        age,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Add-user">
      <div >
        <div className="header">USER REGISTRATION FORM
        </div>
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div>
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Surname</label>
            <div>
              <input
                type="text"
                className="input"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Surname"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div>
              <input
                type="number" min="18"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                required
              />
            </div>
          </div>
          <div className="field">
            <div>
              <button type="submit" className="button1">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
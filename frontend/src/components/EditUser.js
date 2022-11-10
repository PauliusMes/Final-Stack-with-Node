import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../components/AddUser.css";

const EditUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setSurname(response.data.surname);
    setEmail(response.data.email);
    setAge(response.data.age);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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
        <div className="header">EDIT USER FORM</div>
        <form onSubmit={updateUser}>
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
                type="text"
                className="input" min={18}
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
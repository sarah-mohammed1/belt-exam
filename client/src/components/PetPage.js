import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PetPage = (props) => {
  const { id } = useParams();
  const [onePet, setOnePet] = useState({});
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setOnePet(res.data);
      })
      .catch((err) => console.log(err))
  }, [id])

  const deletePet = () => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/")
      })
      .catch((err) => console.log(err))
  }

  const handleClick = () => {

    setLikes(likes + 1);

  };

  return (
    <div className="onePet-component">
      <h3>Details about: {onePet.name}</h3>
      <p>Pet Type: {onePet.type}</p>
      <p>Description: {onePet.desc}</p>
      <br />
      <p>Skills:
        <br />
        {onePet.skill1}
        <br />
        {onePet.skill2}
        <br />
        {onePet.skill3}
      </p>
      <Link to={"/"} className="btn btn-primary"> Back to home</Link>
      <button onClick={deletePet} className="btn btn-danger ml-5">Adopt {onePet.name}</button>
      <button onClick={handleClick}> Like This Cute Pet
        <span className="likes-counter">{` | ${likes}`}</span>
      </button>
    </div>
  );
};

export default PetPage;
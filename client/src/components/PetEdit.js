import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PetEdit = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDesc(res.data.desc);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch((err) => console.log(err));
    }, [])

    const handleEditPet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            desc,
            skill1, skill2, skill3,
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <h3> Edit: {name}</h3>
            <div className="rows-center">
                <div className="col-3">
                    <div className="row">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <form onSubmit={handleEditPet}>
                        <div className="form-group">
                            <label htmlFor="name">Pet Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <label htmlFor="type">Pet Type:</label>
                            <input
                                type="text"
                                id="type"
                                className="form-control"
                                onChange={(e) => setType(e.target.value)}
                                value={type}
                            />

                            <label htmlFor="desc">Pet Description:</label>
                            <input
                                type="text"
                                id="desc"
                                className="form-control"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />

                            <h3>Skills (optional):</h3>

                            <label htmlFor="skill1">Skill 1</label>
                            <input
                                type="text"
                                id="skill1"
                                className="form-control"
                                onChange={(e) => setSkill1(e.target.value)}
                                value={skill1}
                            />

                            <label htmlFor="skill2">Skill 2</label>
                            <input
                                type="text"
                                id="skill2"
                                className="form-control"
                                onChange={(e) => setSkill2(e.target.value)}
                                value={skill2}
                            />

                            <label htmlFor="skill3">Skill 3</label>
                            <input
                                type="text"
                                id="skill3"
                                className="form-control"
                                onChange={(e) => setSkill3(e.target.value)}
                                value={skill3}
                            />
                        </div>
                        <button className="btn btn-primary mt-3" type="submit">
                            Update Pet
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PetEdit;
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleAddPet = (e) => {
        e.preventDefault();
        console.log({
            name,
            type,
            desc,
            skill1, skill2, skill3,
        });
        axios
            .post("http://localhost:8000/api/pets", {
                name,
                type,
                desc,
                skill1, skill2, skill3,
            })
            .then((res) => {
                console.log("success", res);
                navigate("/");
            })
            .catch((err) => {
                console.log("error", err.res);
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div className="container">
            <h2>Need help finding a good home for a pet</h2>
            <div className="rows">
                <div className="col-5">
                    <div className="row">
                        <Link to="/">Back to Home</Link>
                    </div>
                    <form onSubmit={handleAddPet}>
                        <div className="form-group">

                            <label htmlFor="name">Pet Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

                            <label htmlFor="type">Pet Type:</label>
                            <input
                                type="text"
                                id="type"
                                className="form-control"
                                onChange={(e) => setType(e.target.value)}
                            />
                            {errors.type && <p style={{ color: "red" }}>{errors.type.message}</p>}

                            <label htmlFor="desc">Pet Description:</label>
                            <input
                                type="text"
                                id="desc"
                                className="form-control"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                            {errors.desc && <p style={{ color: "red" }}>{errors.desc.message}</p>}

                            <h3>Skills (optional):</h3>

                            <label htmlFor="skill1">Skill 1</label>
                            <input
                                type="text"
                                id="skill1"
                                className="form-control"
                                onChange={(e) => setSkill1(e.target.value)}
                            />


                            <label htmlFor="skill2">Skill 2</label>
                            <input
                                type="text"
                                id="skill2"
                                className="form-control"
                                onChange={(e) => setSkill2(e.target.value)}
                            />


                            <label htmlFor="skill3">Skill 3</label>
                            <input
                                type="text"
                                id="skill3"
                                className="form-control"
                                onChange={(e) => setSkill3(e.target.value)}
                            />


                        </div>
                        <button className="btn btn-primary mt-3" type="submit">
                            Add Pet
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PetForm;
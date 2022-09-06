const Pet = require("../models/pet.model");

module.exports = {
    findAllPets: (req, res) => {
        Pet.find({})
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err) => {
                console.log("findAllPets has failed!");
                console.log(err);
                res.json(err);
            });
    },

    createNewPet: (req, res) => {
        console.log("BODY", req.body);
        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("createNewPet has failed!");
                res.status(400).json(err);
            });
    },

    findOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) => {
                console.log(err);
                console.log("findOnePet has failed!");
                res.json(err);
            });
    },

    deleteOnePet: (req, res) => {
        Pet.deleteOne({ id: req.params.id })
            .then((deletedPet) => {
                console.log(deletedPet);
                res.json(deletedPet);
            })
            .catch((err) => {
                console.log(err);
                console.log("deleteOnePet has failed!");
                res.json(err);
            });
    },

    updatePet: (req, res) => {
        Pet.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPet) => {
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log(err);
                console.log("updatePet has failed!");
                res.status(400).json(err);
            });
    },
    // likePet: (req, res) => {
    //     Pet.findOneAndUpdate(
    //       { _id: req.params._id},
    //       { $inc: { likes: 1 } }
    //     )
    //       .then(() => res.json({ message: "likes increased" }))
    //       .catch(err => res.json(err));
    //   }
};
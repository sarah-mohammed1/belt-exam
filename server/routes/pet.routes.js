const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.post("/api/pets", PetController.createNewPet);
    app.get("/api/pets", PetController.findAllPets);
    app.put("/api/pets/:id", PetController.updatePet);
    // app.put('/api/like/:_id', PetController.likePet);
    app.delete("/api/pets/:id", PetController.deleteOnePet);
    app.get("/api/pets/:id", PetController.findOnePet);
};
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pet_shelter")
    .then(() => console.log("successful"))
    .catch((err) => confirm.log("failed"));
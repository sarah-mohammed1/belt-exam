const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

require("./server/config/mongoose.config")

const userRoutesFunction = require("./server/routes/pet.routes")
userRoutesFunction(app)

app.listen(8000, () => console.log("server is working"));
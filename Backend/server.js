const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);

app.listen(8080, (req, res) => {
    console.log("Server has started running on port 8080.");
});
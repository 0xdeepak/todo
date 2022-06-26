import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todos.js";

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/todos",todoRoutes);

const mongodb =
	"mongodb+srv://deepak:deepak123@cluster0.dj6sb.mongodb.net/todosDB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose.connect(mongodb, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("MongoDb connected successfully");
});

app.get("/", (req, res) => {
	res.send("Welcome to server");
});

app.listen(PORT, () => {
	console.log(`Server is running at port ${3000}`);
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
require("dotenv").config();

import { createConnection } from "typeorm";
import Router from "./routes";
import dbConfig from "./config/database";
import checkAuth from "./middleware/checkAuth";

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(morgan("tiny"));

createConnection(dbConfig)
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect to db ", err);
  });

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public/views" });
});

// custom middleware
app.use(checkAuth);

// router
app.use(Router);

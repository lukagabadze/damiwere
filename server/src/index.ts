import express, { Application } from "express";
import { createConnection } from "typeorm";
import Router from "./routes";
import dbConfig from "./config/database";

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(__dirname + "/public"));

console.log(__dirname);

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

app.use(Router);

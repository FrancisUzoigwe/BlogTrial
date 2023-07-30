import express, { Application } from "express";
import { mainApp } from "./mainApp";
import dBase from "./config/dBase";

const app: Application = express();

const Port: number = 3200;

const realPort = Port;
mainApp(app);
const Server = app.listen(realPort, () => {
  dBase();
  console.log("Server is listening on Port", realPort);
});

process.on("uncaughtException", (error) => {
  console.log("");
  console.log("Server is shutting down due to", error);

  process.exit(1);
});

process.on("unhandeledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to", reason);

  Server.close(() => {
    process.exit(1);
  });
});

import express, { Application } from "express";
import dotenv from "dotenv";
import { mainApp } from "./mainApp";
import { dBase } from "./config/dBase";
dotenv.config();
const app: Application = express();
const Port: number = parseInt(process.env.APPLICATION_PORT!);
const realPort = Port;

mainApp(app);
const Server = app.listen(realPort, () => {
  dBase();
});

process.on("uncaughtException", (err) => {
  console.log("");
  console.log("Server is shutting down due to uncaught exception", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to unhandled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});

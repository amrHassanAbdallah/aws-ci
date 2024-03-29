import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {
  console.log("Running");
  dotenv.config();
  console.log("started auth")
  await sequelize.authenticate();
  console.log("auth oh yeah")
    await sequelize.addModels(V0_FEED_MODELS);
    await sequelize.addModels(V0_USER_MODELS);
  try {
    console.log("before the sync")
    await sequelize.sync();
    console.log("after the sync")
  } catch (error) {
    console.log("inside the catch")
    console.log(error)
    process.exit(1)
  }
 

  console.log("Database Connected");

  const app = express();
  const port = process.env.PORT || 8080;

  app.use(bodyParser.json());

  app.use(cors());

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${process.env.URL} & port ${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();

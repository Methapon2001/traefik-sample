import "dotenv/config";
import express from "express";
import * as routes from "./routes";

const APP_PORT = +(process.env.APP_PORT ?? 80);
const APP_HOST = process.env.APP_HOST ?? "0.0.0.0";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

for (const r of Object.values(routes)) app.use(r);

app.listen(APP_PORT, APP_HOST, () => {
  console.log(`App is listening on http://${APP_HOST}:${APP_PORT}`);
});

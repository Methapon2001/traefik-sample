import { Router } from "express";

import { hello } from "@/lib/hello";

const r = Router();

r.get("/", (_, res) => {
  return res.send({ message: hello("Express TypeScript") });
});

export default r;

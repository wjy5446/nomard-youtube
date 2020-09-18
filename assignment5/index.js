import express from "express";
import { globalRouter } from "./routers";
import { handle404 } from "./controllers";

const app = express();

app.use("/", globalRouter);
app.get("*", handle404);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));

import express from "express";
import path from "path";
import { localMiddleware } from "./middleware";
import { home, login, photos, profile } from "./controllers/controller";
import routes from "./routes";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

app.use(localMiddleware);

app.get(routes.home, home);
app.get(routes.login, login);
app.get(routes.photos, photos);
app.get(routes.profile, profile);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

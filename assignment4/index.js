import express from "express";

const app = express();

const printMiddleware = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const redirectMiddleware = (req, res) => {
  res.redirect("/");
};

app.use(printMiddleware);
app.get("/", (req, res) => res.send("Home"));
app.get("/about-us", (req, res) => res.send("About Us"));
app.get("/contact", (req, res) => res.send("Contact"));

app.use(redirectMiddleware);
app.get("/protected", (req, res) => res.send("Protected"));

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

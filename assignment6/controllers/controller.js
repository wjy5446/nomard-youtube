export const home = (req, res) => res.render("index", { pageTitle: "Home" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const photos = (req, res) =>
    res.render("photos", { pageTitle: "photos" });
export const profile = (req, res) =>
    res.render("profile", { pageTitle: "Profile" });

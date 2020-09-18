export const handle404 = (req, res, next) => {
    res.status(404).send("X");
};

export const home = (req, res) => res.send("Home");
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const confirmAccount = (req, res) => res.send("Confirm Account");

export const courses = (req, res) => res.send("Courses");
export const coursesNew = (req, res) => res.send("Courses New");
export const coursesMine = (req, res) => res.send("Courses Mine");

export const apiDocument = (req, res) => res.send("Api Documentation");
export const apiV1Buy = (req, res) => res.send("Api v1 Buy");
export const apiV1Refund = (req, res) => res.send("Api v1 Refund");
export const apiV2Remove = (req, res) => res.send("Api v2 Remove");
export const apiV2Edit = (req, res) => res.send("Api v2 Edit");

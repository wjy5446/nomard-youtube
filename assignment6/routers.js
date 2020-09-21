
import express from "express";
import {
    home,
    join,
    login,
    confirmAccount,
    courses,
    coursesNew,
    coursesMine,
    apiDocument,
    apiV1Buy,
    apiV1Refund,
    apiV2Remove,
    apiV2Edit
} from "./controllers";

export const globalRouter = express.Router();

const coursesRouter = express.Router();
const apiRouter = express.Router();

const apiV1Router = express.Router();
const apiV2Router = express.Router();

globalRouter.get("", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/confirm-account", confirmAccount);
globalRouter.use("/courses", coursesRouter);
globalRouter.use("/api", apiRouter);

coursesRouter.get("", courses);
coursesRouter.use("/new", coursesNew);
coursesRouter.use("/mine", coursesMine);

apiRouter.use("/documentation", apiDocument);
apiRouter.use("/v1", apiV1Router);
apiRouter.use("/v2", apiV2Router);

apiV1Router.use("/buy", apiV1Buy);
apiV1Router.use("/refund", apiV1Refund);

apiV2Router.use("/remove", apiV2Remove);
apiV2Router.use("/edit", apiV2Edit);

export const localMiddleware = (req, res, next) => {
    res.locals.siteTitle = "Sexy Site";
    next();
};

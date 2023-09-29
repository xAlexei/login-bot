const verifyToken = require("../middlewares/validate-token");
const verifyRoutes = require("./excludeRoutes");



function auth (req, res, next) {
    const isExcludedRoute = verifyRoutes(req);
    if (isExcludedRoute) {
      return next();
    }
    try {
        const userAuthenticated = verifyToken(req, res, next);
        if(!userAuthenticated) {
            res.status(401).send({ error: "Access denied" });
        }
    } catch (error) {
        return res.status(500).send({
            error: "Internal server error: " + error
        })
    }
}

module.exports = auth;
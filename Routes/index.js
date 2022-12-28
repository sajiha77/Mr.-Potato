const express = require("express");
const rootRouter = express.Router();

const r1 = require("./contact.route");
const r2 = require("./metabet.contact.route");

rootRouter.use(r1);
rootRouter.use(r2);

module.exports = rootRouter;

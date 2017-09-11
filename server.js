/**
 * MIT License
 * Copyright (c) 2017 Jewel Mahanta
 * Check LICENSE for more details.
 */
// Load the environment variables from .env file.
require("dotenv").config();

// Other imports
const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
const Views = require("koa-views");
const path = require("path");

// Initialize
const app = new Koa();
const router = new Router();

app.use(Views(path.join(__dirname, "views"), {
    extension: "ejs",
}));

app.use(Static(path.join(__dirname, "assets")));

// Router
router.get("index", "/", async ctx => {
    await ctx.render("index.ejs");
});

// Register the routes
app.use(router.routes());
app.use(router.allowedMethods());

// Run paste
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, HOST, () => {
    console.info(`Running anifun on port ${HOST}:${PORT}`);
});

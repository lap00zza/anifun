/**
 * MIT License
 * Copyright (c) 2017 Jewel Mahanta
 * Check LICENSE for more details.
 */

const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
const Views = require("koa-views");
const path = require("path");

const app = new Koa();
const router = new Router();

// Initialize the middlewares for view engine and static files
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
const PORT = 4000;
const HOST = "127.0.0.1";
app.listen(PORT, HOST, () => {
    console.info(`Running anifun on port ${HOST}:${PORT}`);
});

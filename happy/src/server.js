const express = require("express");
const path = require("path");
const pages = require("./pages.js");
const server = express();
server

  .use(express.urlencoded({ extended: true }))

  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", pages.index)
  .get("/location_orphanages", pages.locationOrphanages)
  .get("/page_orphanage", pages.pageOrphanage)
  .get("/register_orphanage", pages.registerOrphanage)
  .post("/save_orphanage", pages.saveOrphanage);

server.listen(5500);

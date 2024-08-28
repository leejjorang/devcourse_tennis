let server = require("./server");
let router = require("./router");
let handler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
mariadb.connect();

server.start(router.route, handler.handle);

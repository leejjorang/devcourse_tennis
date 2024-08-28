const fs = require("fs");
const main_view = fs.readFileSync("./main.html");

const mariadb = require("./database/connect/mariadb");

function main(response) {
  console.log("main");

  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(main_view);
  response.end();
}

function order(response, productID) {
  response.writeHead(200, { "Content-Type": "text/html" });

  mariadb.query(
    "INSERT INTO orderlist VALUES (" +
      productID +
      ",'" +
      new Date().toLocaleDateString() +
      "');",
    function (err, rows) {
      console.log(rows);
    }
  );

  response.write("order page");
  response.end();
}

let handle = {};
handle["/"] = main;
handle["/order"] = order;

/* image directory */
function redRacket(response) {
  fs.readFile("./image/redRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}
function blueRacket(response) {
  fs.readFile("./image/blueRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}
function blackRacket(response) {
  fs.readFile("./image/blackRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

handle["/image/redRacket.png"] = redRacket;
handle["/image/blueRacket.png"] = blueRacket;
handle["/image/blackRacket.png"] = blackRacket;

exports.handle = handle;

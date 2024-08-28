function route(pathname, handle, response, productID) {
  console.log("pathname : " + pathname);

  if (typeof handle[pathname] == "function") {
    handle[pathname](response, productID);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
}
exports.route = route;

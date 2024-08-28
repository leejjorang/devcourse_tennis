let http = require("http");
let { URL } = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let requestURL = new URL(request.url, `http://${request.headers.host}`);
    let pathname = requestURL.pathname;
    let queryData = Object.fromEntries(requestURL.searchParams.entries());
    route(pathname, handle, response, queryData.productID);
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;

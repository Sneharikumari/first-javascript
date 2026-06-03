const iseven = require("./module/function");
iseven(2);

const isodd = require("./module/odd");
isodd(3);

const isprime = require("./module/prime");
isprime(8);
const m = require("./module/all");
m.feven(3);
m.fodd(4);
m.fprime(9);
const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello sneha");
  res.end();
});
server.listen(3000, () => {
  console.log("server run on port 3000");
});

const movements = require("../controller/movements");

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  },
  {
    method: "GET",
    path: "/movements",
    handler: movements.getAllMovements,
  },
];

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
    handler: (request, h) => {
      return [{ id: 1 }, { id: 2 }, { id: 3 }];
    },
  },
];

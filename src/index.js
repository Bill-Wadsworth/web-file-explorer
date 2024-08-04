const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/api/files/", (request, response) => {
  response.status(200).send(getFileJson(""));
});

app.get("/api/files/:path", (request, response) => {
  const filePath = request.params.path;
  response.status(200).send(getFileJson(filePath));
});

app.listen(PORT, () => {
  console.log("running on port: ", PORT);
});

//FILE MANAGMENT SECTION

const getFileJson = (path) => {
  return { test: { type: "file" }, test2: { type: "file", children: {} } };
};

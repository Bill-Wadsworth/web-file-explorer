import express from "express";
import getFileJson from "./fileHandler";

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/api/files/", (request, response) => {
  response.status(200).send(getFileJson());
});
//Do not ask how the file regex works, it just does.
app.get("/api/files/:path(([a-zA-Z]+)*)", (request, response) => {
  console.log(request.params);
  const filePath = request.params.path;
  response.status(200).send(getFileJson(filePath));
});

app.listen(PORT, () => {
  console.log("running on port: ", PORT);
  console.log("HALL0");
});
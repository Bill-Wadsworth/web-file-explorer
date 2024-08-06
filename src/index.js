const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(200).send("Hello, world!");
});

app.get("/api/files/", (request, response) => {
  console.log(generateTotalFileJson());
  response.status(200).send(generateTotalFileJson());
});
//Do not ask how the file regex works, it just does.
app.get("/api/files/:path(([a-zA-Z]+)*)", (request, response) => {
  console.log(request.params);
  const filePath = request.params.path;
  response.status(200).send(getFileJson(filePath));
});

app.listen(PORT, () => {
  console.log("running on port: ", PORT);
});

//FILE MANAGMENT SECTION

const STORAGEPATH = "./storage";

const getFileJson = (path) => {
  return generateTotalFileJson(path);
};

const generateTotalFileJson = (path = "") => {
  var absolutePath = STORAGEPATH + "/" + path;
  const fs = require("fs");
  var currentFile = {};
  var files = fs.readdirSync(absolutePath, { withFileTypes: true });
  files.forEach((file) => {
    var filePath = path + "/" + file.name;
    const fileInfo = fs.statSync(STORAGEPATH + "/" + filePath);
    if (fileInfo.isDirectory()) {
      currentFile[file.name] = {
        path: filePath,
        type: "directory",
        children: generateTotalFileJson(filePath),
      };
    } else {
      currentFile[file.name] = { type: "file" };
    }
  });
  return currentFile;
};

import fs from "fs";
import Document from "./DocumentInterface";
import Folder from "./FolderInterface";

const STORAGEPATH = "./storage";

const getFileJson = (path = ""): (Folder|Document)[] => {
  return generateTotalFileJson(path);
};

export default getFileJson;

const generateTotalFileJson = (path = ""): (Folder|Document)[] => {
  var absolutePath = STORAGEPATH + "/" + path;
  
  var currentFile:(Folder|Document)[] = [];
  var files = fs.readdirSync(absolutePath, { withFileTypes: true });
  files.forEach((file, index) => {
    var filePath = path + "/" + file.name;
    const fileInfo = fs.statSync(STORAGEPATH + "/" + filePath);
    if (fileInfo.isDirectory()) {
      currentFile[index] = {
        name: file.name,
        path: filePath,
        type: "directory",
        children: generateTotalFileJson(filePath),
      };
    } else {
      currentFile[index] = { 
        name: file.name,
        type: "file" 
    };
    }
  });
  return currentFile;
};
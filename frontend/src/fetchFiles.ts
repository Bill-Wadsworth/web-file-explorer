import Folder from "./interfaces/FolderInterface";

//temp
const api = "http://localhost:3000/api/files/";

const fetchFiles = async (path = ""): Promise<Folder|undefined> => {
    const response = await fetch(api + path);
    const json = await response.json();
    console.log("GOT FILE:", json);
    return json
}

export default fetchFiles;
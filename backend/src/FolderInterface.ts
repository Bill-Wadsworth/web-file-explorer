import Document from "./DocumentInterface";

interface Folder {
    name: string;
    path: string;
    type: string;
    children: (Folder|Document)[] ;
}

export default Folder;
import FolderView from "./FolderView";
import Folder from "./interfaces/FolderInterface";

const FolderContainer = ({ folder }: { folder: Folder }) => {
    return (
        <div>
            <FolderView folderName={folder.name} />
        </div>
    )
}

export default FolderContainer;
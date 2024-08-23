import { useEffect, useState } from "react";
import FolderView from "./FolderView";
import Folder from "./interfaces/FolderInterface";
import fetchFiles from "./fetchFiles";
import Document from "./interfaces/DocumentInterface";
import DocumentView from "./DocumentView";
import "./FileView.css"

const FolderContainer = ({ folder, isRoot }: { folder: Folder, isRoot: boolean}) => {

    //if its the root we want to get data initially on load otherwise should be given data already
    const [refreshing, setRefreshing] = useState(isRoot);

    const [thisFolder, setThisFolder] = useState(folder);

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        //only call refresh code if refreshing
        if (!refreshing) {
            return;
        }
        const path = (isRoot ? "" : folder.path)
        fetchFiles(path).then(data => {
            setThisFolder(data!);
            setRefreshing(false);
        })
    }, [refreshing]);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        (refreshing ? 
            <div>Loading!</div> 
            :
            <div>
                <FolderView folderName={thisFolder.name} collapeFunction={toggleOpen}/>
                {(isOpen ?
                    <div className="flex-row">
                        {/* All elements below the folder name */}
                        {/* Vertical Bar downwards */}
                        <div className="bar" />
                        {/* Children Files */}
                        <div>                            
                            {thisFolder.children.map(child => {
                                return (child.type === "directory" ? 
                                    <FolderContainer folder={child as Folder} isRoot={false} />
                                    :
                                    <DocumentView document={child as Document} />
                                )
                            })}
                        </div>
                    </div>
                    :<></>)} 
            </div>
        )
    )
}

export default FolderContainer;
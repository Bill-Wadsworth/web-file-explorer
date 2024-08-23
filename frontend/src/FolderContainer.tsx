import { useEffect, useState } from "react";
import FolderView from "./FolderView";
import Folder from "./interfaces/FolderInterface";
import fetchFiles from "./fetchFiles";
import Document from "./interfaces/DocumentInterface";
import DocumentView from "./DocumentView";

const FolderContainer = ({ folder, isRoot, depth }: { folder: Folder, isRoot: boolean, depth: number }) => {

    //if its the root we want to get data initially on load otherwise should be given data already
    const [refreshing, setRefreshing] = useState(isRoot);

    const [thisFolder, setThisFolder] = useState(folder);

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        (refreshing ? 
            <div>Loading!</div> 
            :
            <div>
                <FolderView folderName={thisFolder.name} />
                {(isOpen ?
                    <div>
                        {/* All elements below the folder name */}
                        {/* Vertical Bar downwards */}
                        <div/>
                        {/* Children Files */}
                        <div>                            
                            {thisFolder.children.map(child => {
                                return (child.type === "directory" ? 
                                    <FolderContainer folder={child as Folder} isRoot={false} depth={depth+1} />
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
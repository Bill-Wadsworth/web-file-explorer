import "./FileView.css";

const FolderView = ({ folderName, collapeFunction }: {folderName: string, collapeFunction: () => void}) => {
    return (
        <div className="view" onClick={collapeFunction}>
            {folderName}
        </div>
    )
}

export default FolderView;
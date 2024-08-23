import Document from "./interfaces/DocumentInterface";
import "./FileView.css";

const DocumentView = ({ document }: { document: Document }) => {
    return (
        <div className="view">
            {document.name}
        </div>
    )
}
export default DocumentView;
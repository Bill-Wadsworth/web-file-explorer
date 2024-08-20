import Document from "./interfaces/DocumentInterface";

const DocumentView = ({ document }: { document: Document }) => {
    return (
        <div>
            {document.name}
        </div>
    )
}
export default DocumentView;
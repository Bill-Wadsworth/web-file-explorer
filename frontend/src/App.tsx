import './App.css'
import DocumentView from './DocumentView'
import FolderContainer from './FolderContainer'
import Document from './interfaces/DocumentInterface'
import Folder from './interfaces/FolderInterface'

function App() {

  let testDoc: Document = {
    name: "hi", 
    type: "jpeg"
  }

  let testFolder: Folder = {
    name: "folder1",
    path: "path",
    type: "folder",
    children: []
  }

  return (
    <>
      <div>
        <DocumentView document={testDoc}/>
        <FolderContainer folder={testFolder} />
      </div> 
    </>
  )
}

export default App

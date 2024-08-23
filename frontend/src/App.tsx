import './App.css'
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
    path: "",
    type: "folder",
    children: []
  }


  return (
    <>
      <div>
        <FolderContainer folder={testFolder} isRoot={true} />
      </div> 
    </>
  )
}

export default App

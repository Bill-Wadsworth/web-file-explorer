import { useEffect, useState } from 'react'
import './App.css'
import DocumentView from './DocumentView'
import FolderContainer from './FolderContainer'
import Document from './interfaces/DocumentInterface'
import Folder from './interfaces/FolderInterface'
import fetchFiles from './fetchFiles'

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
        <FolderContainer folder={testFolder} isRoot={true} depth={0} />
      </div> 
    </>
  )
}

export default App

import { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'

const EditorText = () => {
  const [editor, setEditor] = useState({
    editorState: EditorState.createEmpty()
  })
  const { editorState } = editor
  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  const onEditorStateChange = (editorState) => {
    setEditor({ editorState })
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      >

      </textarea> */}
    </div>
  )
}

export default EditorText

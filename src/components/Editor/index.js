import React, { useEffect } from "react"
import { Editor, EditorState } from "draft-js"
import "draft-js/dist/Draft.css"


export default function TextEditor(){
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )

  const editor = React.useRef(null)
  function focusEditor() {
    editor.current.focus()
  }

  useEffect(() => {
    console.log(editorState.getCurrentContent().getPlainText())
  }, [editorState])

return (
  <div
    className="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
    onClick={focusEditor}
  >
    <Editor
      ref={editor}
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Write something!"
    />
  </div>
);
}
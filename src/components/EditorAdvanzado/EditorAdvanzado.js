import { useRef, useMemo, useEffect } from 'react'
import JoditEditor from 'jodit-react'
const EditorAdvanzado = ({ titulo, content, setContent }) => {
  const editor = useRef(null)
  const config = {
    readonly: false,
    height: 400,
    placeholder: titulo || 'Empiece a escribir...'
  }
  useEffect(() => {
    const selector = document.querySelector('[data-ref="image"]')
    selector?.addEventListener('click', () => { })
  }, [])
  return (
    <div>
      {useMemo(
        () => (
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => { }}
            onChange={(newContent) => {
              setContent(newContent)
            }}
          />
        ),
        []
      )}
    </div>
  )
}

export default EditorAdvanzado

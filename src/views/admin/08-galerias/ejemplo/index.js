import DragDrop from '@uppy/drag-drop'

<<<<<<< HEAD
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
=======
const Drogo = () => {
  const uppy = React.useMemo(() => {
    return (
      new Uppy()
        .use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
        // or
        .use(Webcam, { id: 'MyWebcam' })
    )
  }, [])
  React.useEffect(() => {
    return () => uppy.close()
  }, [])
>>>>>>> 28b3a965ee484b96e4f0586f87bd6edfda1c3c33

const DragAndDrop = () => {
  return (
    <div>
      <h1>Uppy Demo</h1>
      <DragDrop />
    </div>
  )
}

export default DragAndDrop

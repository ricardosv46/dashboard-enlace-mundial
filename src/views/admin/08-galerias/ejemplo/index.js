import React from 'react'
import { Dashboard } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
const Uppy = require('@uppy/core')

// const XHRUpload = require('@uppy/xhr-upload')
// const Dashboard = require('@uppy/dashboard')
const Webcam = require('@uppy/webcam')

const Drogo = () => {
  const uppy = React.useMemo(() => {
    return (
      new Uppy()
        .use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
        // or
        .use(Webcam, { id: 'MyWebcam' })
    ) // `id` is… "MyWebcam"
  }, [])
  React.useEffect(() => {
    return () => uppy.close()
  }, [])

  return (
    <div>
      <h1>Uppy Demo</h1>
      <Dashboard uppy={uppy} plugins={['Webcam', '']} />
    </div>
  )
}

export default Drogo

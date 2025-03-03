import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { useEffect, useMemo } from 'react'

const DragAndDrop = ({ onUpload = () => {} }) => {
  const uppy = useMemo(() => new Uppy(), [])
  const images = useMemo(() => new Set(), [])

  useEffect(() => {
    uppy.use(thumbnailGenerator)

    return () => uppy.close()
  }, [])

  useEffect(() => {
    uppy.on('thumbnail:generated', (file, preview) => {
      images.add(file.data)
    })

    return () => uppy.close()
  }, [])

  useEffect(() => {
    uppy.on('upload', () => {
      onUpload([...images])
      images.clear()
    })
  }, [])

  return (
    <div>
      <h1>Uppy Demo</h1>
      <Dashboard
        width="100%"
        // note="Images up to 200×200px"
        uppy={uppy}
        locale={{
          strings: {
            addMore: 'Añadir',
            cancel: 'Cancelar',
            xFilesSelected: {
              0: '%{smart_count} archivo seleccionado',
              1: '%{smart_count} archivos seleccionados'
            },
            uploadXFiles: {
              0: 'Subiendo %{smart_count} archivo',
              1: 'Subiendo %{smart_count} archivos'
            },
            browseFiles: 'seleccionalas',
            dropPasteFiles: 'Deja caer tus imagenes o %{browseFiles}',
            dropPasteFolders: 'Deja caer tus imagenes o %{browseFolders}'
          }
        }}
      />
    </div>
  )
}

export default DragAndDrop

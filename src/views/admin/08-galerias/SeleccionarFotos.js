import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import Foto from './Foto'
const imgsList = [
  {
    url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/93/05/49.jpg',
    alt: 'sol y playa',
    seleccionada: false
  },
  {
    url: 'https://turismoi.pe/uploads/photo/version2/photo_file/54018/optimized_2187-1.jpg',
    alt: 'lagunas',
    seleccionada: false
  },
  {
    url: 'https://cde.peru.com//ima/0/1/9/4/6/1946830/924x530/laguna-azulcocha.jpg',
    alt: '',
    seleccionada: false
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Valdivia-Antioquia.jpg/1200px-Valdivia-Antioquia.jpg',
    alt: 'nevados',
    seleccionada: false
  },
  {
    url: 'https://www.nupciasmagazine.com/wp-content/uploads/2020/04/nupcias-maldivas.jpg',
    alt: 'sierra',
    seleccionada: false
  },
  {
    url: 'https://www.nupciasmagazine.com/wp-content/uploads/2020/07/Azulik.jpg',
    alt: '',
    seleccionada: false
  },
  {
    url: 'https://www.evento.love/blog/wp-content/uploads/2018/06/Origen-de-la-luna-de-miel-pareja-marido-mujer-atardecer-1200x720.png',
    alt: '',
    seleccionada: false
  }
]

const SeleccionarFotos = ({ galeria, dispatch }) => {
  return (
    <div className="">
      <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
        <div className="flex justify-between mb-8">
          <Heading>Galeria</Heading>
          <Button size="md">Seleccionar Imágenes </Button>
        </div>
        <div className="gap-4 contenedor-imagenes">
          {imgsList.map((image, index) => (
            <Foto
              key={index}
              url={image.url}
              alt={image.alt}
              galeria={galeria}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeleccionarFotos

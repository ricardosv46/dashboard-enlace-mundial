import React from 'react'
import { useHistory } from 'react-router'
import IconAcciones from '../../../components/btnAcciones/IconAcciones'
import BtnDestacado from '../../../components/BtnDestacado/BtnDestacado'
import BtnEstado from '../../../components/BtnEstado/BtnEstado'
import Button from '../../../components/Buttons/Button'
import Heading from '../../../components/Heading'
import TableGeneral from '../../../components/Tables/TableGeneral'

const LunaDeMiel = () => {
  const history = useHistory()

  const dataHead = [
    ['Id', 1, 'left'],
    ['Foto', 10, 'left'],
    ['Titulo', 2, 'left'],
    ['Estado', 10, 'center'],
    ['Destacado', 10, 'center'],
    ['Acciones', 23, 'left']
  ]

  const dataBody = [
    {
      id: '001',
      foto: (
        <img
          className="w-26 h-22"
          src="https://lh3.googleusercontent.com/proxy/r6hANISbBXc9YUgwU7sCT3aEmnVYdf9L9-W4LgrutApGTncUE5BvnPMkhS6Kp_0jpjn41KNXReLMMAaL2jwXyTyUVm6-bG1lXjQQ-5lx9DID-VPHakguX9Tl4XdJCDt0"
        />
      ),
      titulo: 'Paquete Turístico 1',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '002',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.nupciasmagazine.com/wp-content/uploads/2020/04/nupcias-maldivas.jpg"
        />
      ),
      titulo: 'Paquete Turístico 2',
      estado: <BtnEstado estado={true} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '003',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.nupciasmagazine.com/wp-content/uploads/2020/07/Azulik.jpg"
        />
      ),
      titulo: 'Paquete Turístico 3',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    },
    {
      id: '004',
      foto: (
        <img
          className="w-26 h-22"
          src="https://www.evento.love/blog/wp-content/uploads/2018/06/Origen-de-la-luna-de-miel-pareja-marido-mujer-atardecer-1200x720.png"
        />
      ),
      titulo: 'Paquete Turístico 4',
      estado: <BtnEstado estado={false} />,
      destacado: <BtnDestacado estado={true} />,
      detalle: (
        <IconAcciones onEdit={() => history.push('/luna-de-miel/editar-luna-de-miel')} />
      )
    }
  ]
  return (
    <div className="shadow md:rounded bg-white p-5 py-10 md:p-10">
      <div className="flex justify-between mb-5">
        <Heading>Lunas de Miel</Heading>
        <Button
          onClick={() => history.push('/luna-de-miel/crear-luna-de-miel')}
          size="md"
        >
          Nueva Luna de Miel
        </Button>
      </div>
      <TableGeneral dataBody={dataBody} dataHead={dataHead} />
    </div>
  )
}

export default LunaDeMiel

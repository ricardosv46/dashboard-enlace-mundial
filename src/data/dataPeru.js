import dataPeru from './peru.json'
export const Regiones = [
  'LIMA',
  'AMAZONAS',
  'APURIMAC',
  'AREQUIPA',
  'AYACUCHO',
  'CAJAMARCA',
  'CUSCO',
  'HUANCAVELICA',
  'HUANUCO',
  'ICA',
  'JUNIN',
  'LA LIBERTAD',
  'LAMBAYEQUE',
  'LORETO',
  'MADRE DE DIOS',
  'MOQUEGUA',
  'PASCO',
  'PIURA',
  'PUNO',
  'SAN MARTIN',
  'TACNA',
  'TUMBES',
  'UCAYALI',
  'ANCASH'

]
export const Ciudades = (region) => {
  const ciudades = []
  switch (region) {
    case 'LIMA':
      Object.entries(Object.entries(dataPeru)[0][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'AMAZONAS':
      Object.entries(Object.entries(dataPeru)[1][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'APURIMAC':
      Object.entries(Object.entries(dataPeru)[2][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'AREQUIPA':
      Object.entries(Object.entries(dataPeru)[3][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades

    case 'AYACUCHO':
      Object.entries(Object.entries(dataPeru)[4][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'CAJAMARCA':
      Object.entries(Object.entries(dataPeru)[5][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'CUSCO':
      Object.entries(Object.entries(dataPeru)[6][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'HUANCAVELICA':
      Object.entries(Object.entries(dataPeru)[7][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'HUANUCO':
      Object.entries(Object.entries(dataPeru)[8][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'ICA':
      Object.entries(Object.entries(dataPeru)[9][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'JUNIN':
      Object.entries(Object.entries(dataPeru)[10][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'LA LIBERTAD':
      Object.entries(Object.entries(dataPeru)[11][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'LAMBAYEQUE':
      Object.entries(Object.entries(dataPeru)[12][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'LORETO':
      Object.entries(Object.entries(dataPeru)[13][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'MADRE DE DIOS':
      Object.entries(Object.entries(dataPeru)[14][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'MOQUEGUA':
      Object.entries(Object.entries(dataPeru)[15][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'PASCO':
      Object.entries(Object.entries(dataPeru)[16][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'PIURA':
      Object.entries(Object.entries(dataPeru)[17][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'PUNO':
      Object.entries(Object.entries(dataPeru)[18][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'SAN MARTIN':
      Object.entries(Object.entries(dataPeru)[19][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'TACNA':
      Object.entries(Object.entries(dataPeru)[20][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'TUMBES':
      Object.entries(Object.entries(dataPeru)[21][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'UCAYALI':
      Object.entries(Object.entries(dataPeru)[22][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    case 'ANCASH':
      Object.entries(Object.entries(dataPeru)[23][1]).map((item) =>
        ciudades.push(item[0])
      )
      return ciudades
    default:
      return []
  }
}

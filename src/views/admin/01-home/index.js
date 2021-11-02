import React from 'react'

const Home = () => {
  // let a = Object.create(null)
  const a = {
    edad: 18
  }
  console.log(a)
  const map = new Map()
  map.set('name', 'percy')
  map.set('edad', '27')
  console.log('El objeto map contiene :', map)
  // eliminar una propiedad de un objeto : delete persona.name , esto esta mal, te da muchos problemas en el compilador de js, le quita bastates obtimizaciones
  console.log('El Tamaño de keys es: ', map.size)
  map.delete('edad')
  console.log('El Tamaño de keys es: ', map.size)
  return <div></div>
}

export default Home

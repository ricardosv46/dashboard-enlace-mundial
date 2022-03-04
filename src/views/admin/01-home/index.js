import React, { useEffect, useState } from 'react'

const Home = () => {
  // let a = Object.create(null)
  // const a = {
  //   edad: 18
  // }
  // console.log(a)
  // const map = new Map()
  // map.set('name', 'percy')
  // map.set('edad', '27')
  // console.log('El objeto map contiene :', map)
  // // eliminar una propiedad de un objeto : delete persona.name , esto esta mal, te da muchos problemas en el compilador de js, le quita bastates obtimizaciones
  // console.log('El Tamaño de keys es: ', map.size)
  // map.delete('edad')
  // console.log('El Tamaño de keys es: ', map.size)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  useEffect(() => {
    // console.log('useEffect no dependency')
  })
  useEffect(() => {
    // console.log('useEffect[]')
  }, [])
  useEffect(() => {
    // console.log('useEffect[counter1]')
  }, [counter1])
  // const datos = [
  //   // {
  //   //   nombre: 'percy',
  //   //   edad: 27
  //   // },
  //   // {
  //   //   nombre: 'pedro',
  //   //   edad: 60
  //   // }
  // ]
  // const getDatos = () => {
  //   return new Promise((resolve, reject) => {
  //     if (datos.length === 0) {
  //       reject(new Error('No existe Datos'))
  //     }
  //     setTimeout(() => {
  //       resolve(datos)
  //     }, 1500)
  //   })
  // }
  // getDatos()
  //   .then((datos) => console.log(datos))
  //   .catch((error) => console.log(error))
  // const fetcDatos = async () => {
  //   try {
  //     const db = await getDatos()
  //     console.log(db)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  // console.log(fetcDatos())
  return (
    <div className="">
      <h1>Clicks c1: {counter1}</h1>
      <h1>Clicks c2: {counter2}</h1>
      <div className="flex gap-7 ">
        <button
          className="bottom-auto"
          onClick={() => setCounter1(counter1 + 1)}
        >
          Increment c1
        </button>
        <button onClick={() => setCounter2(counter2 + 1)}>Increment c2</button>
      </div>
    </div>
  )
}

export default Home

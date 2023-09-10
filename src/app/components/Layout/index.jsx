import { Children } from 'react'
import Continuar from '../continuar'
import Regresar from '../regresar'

export default function Layout({children}) {
  return (
    <div className='flex justify-between mx-8 my-8 '>
    <Regresar /> {children} <Continuar />
    
    
    

    </div>
  )
}

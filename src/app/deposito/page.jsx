import Image from 'next/image'
import Layout from '../components/Layout'

function deposito() {
  return (
    <>
    <div className=' grid h-full m-5 place-items-center bg-blue-800 '>
      <h1 className='text-white uppercase text-4xl my-10 '> Ingrese la cantidad que desea depositar</h1> 

      <input 
    
    className='bg-white border rounded  py-10 px-20 my-10 place-content-center text-4xl  '

    />

    <div className=' bg-cyan-500 text-white grid grid-cols-3 grid-rows-3 gap-4 border rounded text-6xl my-10 p-10 w-80 '>

      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 ' >1</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>2</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>3</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>4</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>5</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>6</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>7</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>8</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>9</button>
      <button className='border-spacing-5 border-2 border-white bg-slate-500 rounded p-3 '>0</button>


    </div>

    </div>

    


    


    <Layout />

   </>
  )
}

export default deposito
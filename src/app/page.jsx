

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>


  <div className=' grid h-full m-5 place-items-center bg-blue-800'>


<div className=' text-center text-white uppercase text-5xl m-5 '>

<label>bienvenido</label>
</div>

<div className='flex gap-4 m-20 place-items-center justify-between  '>
    
    
 <Link className=' uppercase  text-4xl bg-sky-500  border rounded-sm  p-10 text-white ' href="/consulta"> consultar saldo </Link>
 <Link  className=' uppercase  text-4xl bg-sky-500  border rounded-sm  p-10 text-white ' href="/retirar"  > retirar </Link>
 <Link  className=' uppercase  text-4xl bg-sky-500  border rounded-sm  p-10 text-white ' href="/transferencias" > transferir </Link>
 <Link className=' uppercase  text-4xl bg-sky-500  border rounded-sm  p-10 text-white ' href="/deposito"  > depositar </Link>
 <Link  className=' uppercase  text-4xl bg-sky-500  border rounded-sm  p-10 text-white ' href="/pago"  > pagar </Link>
    
    
      
      
      
      



</div>
</div>

</>
  )
}


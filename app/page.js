import React from 'react'
import Link from 'next/link'
export  const  Main= () => {
  return (
    <>
      <h1 className='text-center text-2xl font-bold text-[red] mb-12'>Welcome To Next Js Single Page Applications</h1>
      <div className='text-center'>
        <ul className='flex flex-col gap-4 items-center list-disc'>
          <li className='text-lg font-semibold'>
            <Link href="/Counter">Counter App</Link>
          </li>
          <li className='text-lg font-semibold'>
            <Link href="/Todo">Todo App</Link>
          </li>
          <li className='text-lg font-semibold'> 
            <Link href="/Login">The Login Page</Link>
          </li>
        </ul>
      
      </div>
    </>
  )
}

export default Main 

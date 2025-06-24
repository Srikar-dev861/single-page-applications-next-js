'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncreament=()=>{
        setCount(count + 1);
    }
    const onDecreament=()=>{
        setCount(count - 1);
    }
    
  return (
    <>
        <Link href="/" className='text-blue-500 font-semibold text-lg ml-10 mt-5'>Go Back</Link>
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <h1 className="text-4xl font-extrabold text-blue-700 bg-blue-100 w-fit mx-auto px-6 py-2 rounded-lg shadow mb-9 tracking-wide">
    Counter
    </h1>
            <h1 className='mx-auto w-fit font-semibold text-2xl'>Count: <span>{count}</span></h1>
            <div className='flex gap-8 items-center justify-center mx-auto mt-10 '>
                <button onClick={onIncreament} className='text-2xl font-semibold bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-2'>Increment</button>
                <button  onClick={onDecreament} className='text-2xl font-semibold bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-2'>Decrement</button>
            </div>
            <button onClick={()=>setCount(0)} className='text-2xl font-semibold bg-red-500 hover:bg-red-600 text-white p-2 rounded-2 mt-10'>Reset</button>
        </div>

</>
  )
}

export default Counter

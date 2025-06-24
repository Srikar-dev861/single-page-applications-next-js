'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [inputVal,setinputVal] = useState('');
    const [todos, setTodos] = useState([]);
    const onChangingInput = (e) => {
        setinputVal(e.target.value);
    }
    const addItem=()=>{
        if(inputVal===''){
            alert('Please Enter a Task');
        }
        else{
            setTodos([...todos,inputVal])
            setinputVal('');         }
    }
    const onDelete=(index)=>{
         setTodos(todos.filter((todo,i)=>{
            return i!== index;
         })
        )
    
    }
    


  return (
   <>
  <Link
    href="/"
    className="inline-block text-blue-600 font-semibold text-lg ml-10 mt-8 hover:underline transition"
  >
    ← Go Back
  </Link>
  <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 via-white to-blue-200 py-10">
    <h1 className="text-4xl font-extrabold text-blue-700 bg-white/80 w-fit mx-auto px-8 py-4 rounded-2xl shadow-lg mb-12 tracking-wide border-b-4 border-blue-300">
      Welcome To Next Js Todo App
    </h1>
    <div className="flex justify-center items-center bg-white/90 rounded-xl shadow-md px-6 py-4 mb-8 gap-4 w-full max-w-xl">
      <input
        onChange={onChangingInput}
        value={inputVal}
        type="text"
        placeholder="Enter Your Task Here"
        className="border-2 border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-lg bg-blue-50 placeholder:text-blue-300 transition"
      />
      <button
        onClick={addItem}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition"
      >
        Add Task
      </button>
    </div>
    <div className="w-full max-w-xl bg-white/90 rounded-xl shadow-md px-6 py-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"></path></svg>
        Your Tasks
      </h2>
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <li className="text-gray-400 italic text-center">No tasks yet. Add your first task!</li>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 hover:bg-blue-100 transition group shadow-sm"
            >
              <span className="text-lg text-gray-700">{todo}</span>
              <button
                onClick={() => onDelete(index)}
                className="bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-lg font-semibold ml-4 shadow hover:from-red-500 hover:to-red-700 transition opacity-80 group-hover:opacity-100"
                title="Delete"
              >
                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  </div>
</>
  )
}

export default Todo


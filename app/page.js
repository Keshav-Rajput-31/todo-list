'use client'
import React, { useState } from 'react'
import Header from '/Components/Header'



const page = () => {

  let [Task, setTask] = useState("")
  let [MainTask, setMainTask] = useState([])
  let RanderTask = "No task available"
  let audio = new Audio('sound1.mp3')
  audio.autoplay
  
  const submithandler = (e)=>{
    e.preventDefault()
    
    let taskinput = document.getElementById("TaskInput").value
    setTask("")
    setMainTask([...MainTask , {taskinput}])
  }

  const RemoveTask = (i) =>{

    let CopyArry = [...MainTask]
    CopyArry.splice(i,1)
    setMainTask(CopyArry)


  }

  if(MainTask.length>0){

    
    RanderTask = MainTask.map((e,i)=>{
      return (
      <div key={i} className='flex justify-between items-center '>

      <h2 className='text-black text-2xl font-semibold capitalize my-1'>{e.taskinput}</h2>

      <button onClick= {()=>{
        RemoveTask(i)
      }} className='bg-red-500 px-2 py-2 text-white text-sm font-bold rounded-lg active:bg-red-600 my-1'>Remove</button>
      
      </div>
      );
    })
  }


  
  
  return (
    <main className='overflow-hidden'>

      <Header/>


        <form className="bg-blue-200 flex justify-center gap-10 py-5" autoComplete='off'>

        <input value={Task} onChange={(e)=>{setTask(e.target.value)}} id='TaskInput' className='bg-gray-200 text-center rounded-md border-2 border-blue-400 w-[50%] outline-none focus:bg-gray-300 ' type="text" placeholder='Enter Your Task'/>
        <button onClick={submithandler} className='py-2 px-8 bg-gray-500 text-white text-2xl font-bold rounded-md active:bg-gray-600'>Enter</button>
        </form>

      <div className='bg-blue-100 px-10 py-2'>

        <h1 className='text-gray-400 text-2xl'>{RanderTask}</h1>





      </div>











    </main>
  )
}

export default page
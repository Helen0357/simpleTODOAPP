'use client';
import React, { useRef, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Model from './ModelPopUp'
import ModelPopUp from './ModelPopUp';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
function AddTask() {
  const [newTask , setNewTask] = useState('');
  const [newColor , setNewColr] = useState('');
  const route = useRouter();
  const [id , setId]= useState(3);
  const check = useRef();
  const [checkk , setChecked] = useState(false);
  const handle = async (e) => {
    e.preventDefault();
  
    // console.log(newTask);
    await addTodo({
      id:id,
      task: newTask,
      color: newColor
    });
    setId(id +1);
    setNewTask('');
    setNewColr('');
    setChecked(false);
    route.refresh();
  }
  return (
    <div>
      
<label htmlFor="my-modal-2" className="btn btn-primary w-full text-white" onClick={()=>setChecked(true)}>open modal
<AiOutlinePlus size={16}  /></label> 
       


        <ModelPopUp  check={checkk} >
          <form method="dialog" onSubmit={handle}>
          <label htmlFor="my-modal-2" className="btn" onClick={()=> setChecked(false)}>x</label>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button> */}
  <input type="text" placeholder="Type here" className="block input input-bordered w-full mt-2" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
  {/* <input type='text' className="input input-bordered w-full max-w-xs" value={newColor} onChange={(e)=> setNewColr(e.target.value)} /> */}
  <button className="btn block w-full mt-4" type='submit'>Button</button>
          </form>
     
        </ModelPopUp>
     
    </div>
  )
}

export default AddTask
'use client';

import React, { useState } from 'react'
import ModelPopUp from './ModelPopUp';
import { deleteTodo, editTodo } from '@/api';
import { useRouter } from 'next/navigation';

function Task({task}) {
  const [edit , setEdit] = useState(task.task);
  // const [editx , setEditx] = useState(task.color);
  const [open , setopen] = useState(false);
  const route = useRouter();
  const handleEdit = async (e) => {
    e.preventDefault();
  
    // console.log(newTask);
    await editTodo({
      id:task.id,
      task: edit
    });

 
    setopen(false);
    route.refresh();
  }
  const deleteHndle = async (id) => {
await deleteTodo(id);
route.refresh();

  }
  return (
<>
<ModelPopUp  check={open} >
          <form method="dialog" onSubmit={handleEdit}>
          <label htmlFor="my-modal-3" className="btn" onClick={()=> setopen(false)}>x</label>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button> */}
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={edit} onChange={(e) => setEdit(e.target.value)} />
  {/* <input type='text' className="input input-bordered w-full max-w-xs" value={editx} onChange={(e)=> setEditx(e.target.value)} /> */}
  <button className="btn" type='submit'>edit</button>
          </form>
     
        </ModelPopUp>
    <tr>
             
    <td>{task.task}</td>
  
    <td>
      <span htmlFor="my-modal-3" className="btn py-1 bg-green-500 mr-4 text-white" onClick={()=>setopen(true)}>Edit</span>
      <span onClick={()=>deleteHndle(task.id)} className='btn bg-red-500 text-white'>Delete</span>
    </td>
    
  </tr>
</>
  )
}

export default Task
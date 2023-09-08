
import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAlltodo } from '@/api';
import Model from './components/ModelPopUp';

export default async function Home() {
  const todos = await getAlltodo();
  console.log(todos);
  return ( 
  <main className='max-w-5xl mx-auto mt-3'>
    <div className='flex flex-col gap-4'>
<h1 className='text-xl text-center  font-black'>TO DO LIST</h1>
{/* <Model /> */}
<AddTask />
<TodoList todos={todos} />
    </div>
  </main>
  )
}

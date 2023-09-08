'use client';
import React from 'react'
import {Table} from 'react-daisyui'
import Task from './Task'
function TodoList({todos}) {
    return (
        <div className="overflow-x-auto">
        <table className="table">
      
          <thead>
            <tr>
        
              <th style={{width: '80%'}}>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        
            {todos.map((todo) => <Task task={todo} key={todo.id} /> )}
      
          </tbody>
        </table>
      </div>
      )
}

export default TodoList;
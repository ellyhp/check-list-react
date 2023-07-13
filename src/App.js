import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { useState } from 'react';




const defaultTodos = [
  { text: 'Leer un libro nuevo', completed: true},
  { text: 'Hacer las compras de la semana', completed: false},
  { text: 'Programar una aplicacion con React', completed: true},
];


function App() {
  return (
    <div className="App">



 
         <div className='page'>
         
            <div className='content'>
                <TodoCounter  completed={15} total={20}/>
                <TodoSearch />
                

                  <TodoList>
              
                      {defaultTodos.map(todo => (
                        <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        />
                      ))}


                  </TodoList>

                <div className='btn-content'>
                  <CreateTodoButton></CreateTodoButton>
                </div>
            </div>
          </div>

        

      </div>
    );
  }




export default App;



import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { useState } from 'react';
import React from 'react';




const defaultTodos = [
  { text: 'Leer un libro nuevo', completed: true},
  { text: 'Hacer las compras de la semana', completed: true},
  { text: 'Programar una aplicacion con React', completed: false},
  { text: 'Leer documentacion de React', completed: false},
  { text: 'Contar cuentos', completed: false},
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  const [searchValue, setSeachValue] = React.
  useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText)
    }
  );

    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text 
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text 
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    }

  return (
    <div className="App">

         <div className='page'>
         
            <div className='content'>

                  <TodoCounter  completed={completedTodos} total={totalTodos}/>
                  <TodoSearch 
                    searchValue={searchValue}
                    setSeachValue={setSeachValue}
                  />
                

                  <TodoList>
              
                      {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={ () => completeTodo(todo.text)}
                        onDelete={ () => deleteTodo(todo.text)}
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



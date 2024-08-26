import React, { useState } from 'react';
import TodoService from '../TodoService';
import { TodoTypes } from '../todo';
import "../CSS/TodoForm.css"

type TodoFormProps = {
    setTodo: React.Dispatch<React.SetStateAction<TodoTypes[]>>
};

const TodoForm = ({setTodo}: TodoFormProps) => {

    const [newTodoText, setNewTodoText] = useState<string>('');

    const handleTodo = () => {
        if(newTodoText.trim() !== "") {
            const newTodo = TodoService.addTodos(newTodoText);
            setTodo((prevTodo) => [...prevTodo, newTodo]);
            setNewTodoText('');
        }
    }

  return (
    <div className='inputForm'>
      <input type='text' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus={true} placeholder='Add Todo' />
      <button onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default TodoForm;

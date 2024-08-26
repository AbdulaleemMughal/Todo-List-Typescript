import { useState } from "react";
import { TodoTypes } from "../todo";
import TodoService from "../TodoService";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todo, setTodo] = useState<TodoTypes[]>(TodoService.getTodos());
  const [editedTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  const handleEditStart = (id: number, text: string) => {
    let a = confirm("Do you want to Edit this todo");
    if (a) {
      setEditedTodoId(id);
      setEditedTodoText(text);
    }
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });
      setTodo((prevTodo) =>
        prevTodo.map((todo) => (todo.id === id ? updateTodo : todo))
      );

      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    let a = confirm("Are you sure you want to delete");
    if (a) {
      TodoService.deleteTodo(id);
      setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodo={setTodo} />
      </div>

      <TodoItem
        todo={todo}
        editedTodoId={editedTodoId}
        editedTodoText={editedTodoText}
        setEditedTodoText={setEditedTodoText}
        handleEditSave={handleEditSave}
        handleEditCancel={handleEditCancel}
        handleEditStart={handleEditStart}
        handleDeleteTodo={handleDeleteTodo}
      />
      {/* {todo.map((todo) => {
        return (
          <div className="items" key={todo.id}>
            {editedTodoId == todo.id ? (
              <div className="editedText">
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                />
                <button onClick={() => handleEditSave(todo.id)}>
                  <FaCheck />
                </button>
                <button
                  className="cancelBtn"
                  onClick={() => handleEditCancel()}
                >
                  <GiCancel />
                </button>
              </div>
            ) : (
              <div className="editBtn">
                <span>{todo.text}</span>
                <button onClick={() => handleEditStart(todo.id, todo.text)}>
                  <FaEdit />
                </button>
              </div>
            )}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        );
      })} */}
    </div>
  );
};

export default TodoList;

import React from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemProps } from "../TodoItem.types";

const TodoItem = ({
  todo,
  editedTodoId,
  editedTodoText,
  handleDeleteTodo,
  setEditedTodoText,
  handleEditSave,
  handleEditCancel,
  handleEditStart,
}: TodoItemProps) => {
  return (
    <div>
      {todo.map((todo) => {
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
      })}
    </div>
  );
};

export default TodoItem;

import { TodoTypes } from "./todo";

const LOCAL_STORAGE_KEY = "todo";

const TodoService = {
  //Get Todo
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // Add Todo
  addTodos: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updatedTodos = [...todos, newTodo];   
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return newTodo;
  },

  //Update the todo
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return todo;
  },

  //Deleting Todo
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((t) => t.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;

import { TodoTypes } from "./todo";

export type TodoItemProps = {
    todo: TodoTypes[]
    editedTodoId: number | null
    editedTodoText: string
    setEditedTodoText: React.Dispatch<React.SetStateAction<string>>
    handleEditSave: (id: number) => void
    handleEditCancel: () => void
    handleEditStart: (id: number, text: string) => void
    handleDeleteTodo: (id: number) => void
};
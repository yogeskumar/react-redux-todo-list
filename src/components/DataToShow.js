import { useSelector } from "react-redux";

export default function DataToShow(searchValue) {
    const todoData = useSelector((state) => state.data.todoData);

    const rows = todoData
        .filter((todo) => {
            // Filter todos based on searchValue
            const complete_value = todo.completed ? "Complete" : "Incomplete";
            return todo.id.toString().toLowerCase().includes(searchValue.toString().toLowerCase()) || todo.title.toString().toLowerCase().includes(searchValue.toString().toLowerCase()) || complete_value.toString().toLowerCase().includes(searchValue.toString().toLowerCase());
        })
        .map((todo) => {
            // Create rows from filtered todos
            return createData(todo.id, todo.title, todo.completed ? "Complete" : "Incomplete", {
                id: todo.id,
                userId: todo.userId,
                title: todo.title
            });
        });

    return rows;
}

function createData(todoid, title, status, action) {
    return { todoid, title, status, action };
}

import ToDoItem from "./ToDoItem";

const ToDoList = ( items ) => {
    return (
        <div>
            { items.map(item => {
                alert(item);
            })
            }
        </div>
    )
} 

export default ToDoList;
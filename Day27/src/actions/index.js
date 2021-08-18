const AddTodo = (todo) => {
    return({
        type: "ADD_TODO",
        payload: todo,
    })
}

const RemoveTodo = (id) => {
    return({
        type: "REMOVE_TODO",
        payload: id,
    })
}

export {AddTodo, RemoveTodo};
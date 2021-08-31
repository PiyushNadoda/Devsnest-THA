import React from 'react';
import { useSelector} from 'react-redux';
import Todo from './Todo';
import { reducerType } from '../reducers/index'

const TodoList = () => {
    const todos : string[] = useSelector( (state : reducerType) => state.todos)
    return(
        <>
        <div className="todo-list">
        {todos.map((todo : string, index : number) => {
            return(  
                <Todo todo={todo} key={index} index={index} />
            )
        })}
        </div>
        </>
    )
}

export default TodoList;
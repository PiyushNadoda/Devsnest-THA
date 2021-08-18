import { useSelector} from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    return(
        <>
        <div className="todo-list">
        {todos.map((todo, index) => {
            return(  
                <Todo todo={todo} key={index} index={index} />
            )
        })}
        </div>
        </>
    )
}

export default TodoList;
import { ACTION_TYPES } from "./TodoListRedu"
const TodoLi = ({ state,dispatch }) => {

    const deleteHandler =(id) => {
        dispatch({type:ACTION_TYPES.DELETE,payload:id})
    }
    return (

        <div>
            {state.map((item) => (
                <div key={item.id}>
                    <li>{item.title}</li>
                    <button onClick={()=> deleteHandler(item.id)} >Delete</button>
                </div>
            ))}
        </div>

    )
}


export default TodoLi;
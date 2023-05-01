import React, { useReducer, useState } from "react";
import { v4 } from "uuid";
import TodoLi from "./TodoLi";

  export const initialState = {
  todos: [
    {
      id: v4(),
      title: "Aziat",
    },
  ],
};
 export const ACTION_TYPES = {
  ADD: "ADD",
  DELETE: "DELETE",
};


const reducerFunc = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case ACTION_TYPES.DELETE: {
      return {
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};





export const TodoListReducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [title, setTitle] = useState("");


  const changeHandler = (e) => {
    setTitle(e.target.value);
  };
  //   console.log(title);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      id: v4(),
    };
    dispatch({ type: ACTION_TYPES.ADD, payload: data });
    setTitle("");
  };
  console.log(state);

  
  return (
    <div>
      <>
        <form onSubmit={submitHandler}>
          <div>
          <input type="text" value={title} onChange={changeHandler} />
          <button disabled={!title} type="submit">
            ADD
          </button>
          </div>
          
        </form>
      </>
      <TodoLi state={state.todos} dispatch={dispatch} />
    </div>
  );
};

export default TodoListReducer;


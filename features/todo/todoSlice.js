import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos: [{id:1,text:"hello kinshuk"}]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:
    {
      addtodo: (state,action)=>{
        const todo={
            id:1,text:"helloworld"
        }
      }  ,
      removeTodo:()=>{}
    }
})

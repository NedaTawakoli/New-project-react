import { useReducer } from "react";
import Q11 from "./Question11";
import Q12 from "./Question12";

const todoList = ["Learinig React","Going to school","Wash the dishes"];
function Q10(){
   const [todos,action] = useReducer(myFunc,todoList)
    return<>
        <div className="w-full max-w-6xl mx-auto">
            <Q12 todos = {todos} action={action}/>
                <div className="p-5 grid grid-cols-2 gap-4">
                {todos.map((x,index)=>{
                    return(
                       <Q11 key={index } x={x}/> 
                    )
                })}
             </div>
   
        </div>
        </>
}
export default Q10;
function myFunc(data,action){
   return [...data,action.payload]
}
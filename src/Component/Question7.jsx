import { useReducer } from "react";
 
function Q7(){
   function func(state,myFunction){
    if(myFunction.type ==="inc"){
        return {count: state.count + myFunction.payload}
    }else{
        return {count:state.count - myFunction.payload}
    }
   }
  const[data,action] = useReducer(func,{count:0});
    return(
        <div className="w-full flex justify-between text-3xl my-4 px-4 shadow-2xl shadow-purple-400 py-5">
           <button onClick={()=>action({type:"inc" ,payload : 1})}>افزایش دهنده</button>
           <h1>{data.count}</h1>
           <button onClick={()=>action({type:"dec" ,payload:1})}>کاهش دهنده</button>
        </div>
    )
}
export default Q7;
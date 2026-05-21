import { Siren } from "lucide-react";
import { useReducer } from "react";

function Q8(){
    function func(state,action){
         return state = action.payload
    }
    const [data,action] = useReducer(func,false)
    return(
   <div className="w-full min-h-screen flex justify-center items-center">
    <div className="w-fit items-center p-8 flex flex-col space-y-4">
     <Siren size={62} className={`${data ? 'fill-yellow-400 text-yellow-400' : ''}` } />
     <button onClick={()=>action({type:'light',payload:!data})}
     className={`rounded-md px-8 py-3 shadow-2xl shadow-purple-600  ${data ? 'bg-red-500 text-white' : 'bg-black text-white '}` }>{data ? 'Turn Off':'Turn On'}</button>
    </div>
    
   </div>
    )
}
export default Q8;
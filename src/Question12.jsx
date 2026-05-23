import { useState } from "react";

function Q12({action}){
    const [value,setValue] = useState("");
    function handleClick(){
        action({payload: value});
        setValue("");
    }
    return(
        <div className="w-full mx-auto ">
     <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="What is in your mind?" className="w-[47%] py-3 rounded-md border mx-7" />
     <button onClick={ handleClick} className="bg-purple-400 py-4 px-11">Save</button>
        </div>
    )
}
export default Q12;
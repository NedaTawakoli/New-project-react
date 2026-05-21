import { useState } from "react";

function Q2(){
   const [text,setText] = useState("");
    return(
        <div>
            <h1>{text}</h1>
            <input onChange={(e)=>setText(e.target.value)} type="text" />
        </div>
    )
}export default Q2;
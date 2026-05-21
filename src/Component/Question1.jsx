import { useRef } from "react";

function Q3(){
   const inputRef = useRef();
   function func(){
    inputRef.current.focus();
   }
    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={func}>Click Me</button>
        </div>
    )
}export default Q3;
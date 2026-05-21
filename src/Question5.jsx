import { useEffect, useState } from "react";

function Q5(){
   const [time,setTime] = useState(0);
   useEffect(()=>{
   let i = setInterval(() => {
        setTime((prev)=>prev+1);
    }, 1000);
   return()=> clearInterval(i);
   },[]);
    return(
        <div>
         <h1>{time}</h1>
        </div>
    )
}
export default Q5;
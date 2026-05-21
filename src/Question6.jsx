import { useState } from "react"

function Q6(){
 const [dark,setDark] = useState(false);
  return(
    <div style={{
      backgroundColor: dark ? "black" :"white",
      color: dark ? "white" :"black",
      height:"40vh",
    }}> 
      <button onClick={()=>setDark(!dark)}>Click Me</button>
    </div>
  )
}
export default Q6;
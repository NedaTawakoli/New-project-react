import { useState } from "react"

function Q4(){
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [value,setValue] = useState(0);
  function func(){
    setValue(Number(num1) + Number(num2));
  }
    return(
        <div>
            <h1>{value}</h1>
            <input onChange={(e)=>setNum1(e.target.value)} type="number" />
            <button onClick={func}>Calculate</button>
            <input onChange={(e)=>setNum2(e.target.value)} type="number" />
        </div>
    )
}
export default Q4;
import { useState } from "react"
import Q1 from "./Component/Question1";
import Q2 from "./Component/Question2";
import Q3 from "./Component/Question3";
import Q4 from "./Question4";
import Q5 from "./Question5";
import Q6 from "./Question6";
import Q7 from "./Component/Question7";
import Q8 from "./Question8";
import Question9 from "./Question9";
import Q9 from "./Question9";
import Q10 from "./Question10";

export default function App() {
 const [value,setValue] = useState(0);
  return(
    <div className="flex  justify-between bg-black text-white h-screen flex-col">
      {/* <button className="border" onClick={()=>setValue(value+1)}>Increament</button>
      <h1>{value}</h1>
      <button className="border" onClick={()=>setValue(value-1)}>Decreament</button> */}
      {/* <Q7/>
      <Q8/> */}
      <Q9/>
      <Q10/>
    </div>
  )
}
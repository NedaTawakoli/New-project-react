import React, { useReducer } from 'react'
const info = {name:"",email:""}
function Q9() {
   const [data,action] = useReducer(rudecer,info)
  return (
    <div className='w-full items-center gap-2 text-4xl'>
       <h1 className='text-center my-3'>Question 3 Reducer</h1>
       <input value={data.name} onChange={(e)=>action({type:"name",payload:e.target.value})}
       className='border py-2 w-[40%] mx-22 my-4' type="text" placeholder='Enter you name' />
       <input value={data.email} onChange={(e)=>action({type:"email",payload:e.target.value})} className='border py-2 w-[40%] mx-4' type="email" placeholder='Enter you email' />
       <h1 className='text-5xl text-center font-bold'>Your name is :{data.name}</h1>
       <h1 className='text-5xl text-center font-bold'>Your email is :{data.email}</h1>
    </div>
  )
}

export default Q9;
function rudecer(data,func){
   switch(func.type){
    case "name":
        return {...data,name:func.payload}
        break;
        default:
            return {...data,email:func.payload}
   }
}

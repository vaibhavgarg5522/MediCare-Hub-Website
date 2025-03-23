import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState("Signup")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")

  const onSubmitHandler = async(event)=>{
    event.preventDefault()
  }

  return (
   <form className='min-h-[80vh] flex items-center'>
     <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
      <p className='text-2xl font-semibold'> {state === "Signup" ? "Create Account": "Login"} </p>
      <p> Please {state === "Signup" ? "sign up": "log in"} to book apointment</p>
      {state === "Signup" &&  <div className='w-full'>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e)=>setName(e.target.value)} value={name} type="text" name="" id="" required/>
      </div>}
      

      <div className='w-full'>
        <p>Email</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="" id="" required/>
      </div>

      <div className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="" id="" required/>
      </div>
      <button className='bg-primary text-white w-full py-2 rounded-md text-base'> {state === "Signup" ? "Create Account": "Login"}</button>
        {state === "Signup" ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>: <p>Create an new account ? <span onClick={()=>setState('Signup')} className='text-primary underline cursor-pointer'>click here </span></p> }
     </div>
   </form>
  )
}

export default Login
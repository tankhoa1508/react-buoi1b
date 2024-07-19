import React, { useState } from 'react'

export default function Hook1() {
    const [name,setName] = useState("");
  return (
    <div>
        <h1>Hook1, Name: {name}</h1>
        <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} ></input>
    </div>
  )
}

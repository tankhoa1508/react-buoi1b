import React, { useState } from 'react'

export default function Hook2() {
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [res,setRes] = useState(0);
  return (
    <div>
        <input type='text' placeholder='Nhập a' value={a} onChange={(e)=>setA(e.target.value*1)} ></input> <br/>
        <input type='text' placeholder='Nhập b' value={b} onChange={(e)=>setB(e.target.value*1)} ></input> <br/>
        <button onClick={()=>setRes(a+b)}>+</button>
        <button onClick={()=>setRes(a-b)}>-</button>
        <button onClick={()=>setRes(a*b)}>*</button>
        <button onClick={()=>setRes((a/b).toFixed(2))}>/</button> <br/>
        <button>Result: {res}</button>
    </div>
  )
}

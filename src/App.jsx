import React, { useState } from 'react'
import "./App.css"
export default function App() {
  const[fInput,setFInput]=useState("");
  const[sInput,setSInput]=useState("");
  const[output,setOutput]=useState("");
  const[error,setError]=useState("");
  const[sucess,setSuccess]=useState("");

  function cheakInputEmptyOrNot(){
    if (isNaN(fInput) || isNaN(sInput)) {
      setError('Error! Please enter valid numbers.');
      return false;
    }
    if(fInput==""){
      setError("Num1 cannot be Empty")
      return false
    }
    if(sInput==""){
      setError("Num2 cannot be Empty")
      return false
    }
    setError("");
    return true
  }

  function additionHandler(){
    if(cheakInputEmptyOrNot()){
      setOutput(Number(fInput)+Number(sInput));
      setSuccess("Success")
    }
  }
  function subtrationHandler(){
    
    if(cheakInputEmptyOrNot()){
      setOutput(Number(fInput)-Number(sInput));
      setSuccess("Success")
    }
    
  }
  function multiplicationHanler(){
    if(cheakInputEmptyOrNot()){
      setOutput(Number(fInput)*Number(sInput));
      setSuccess("Success")
    }
  }
  function divisionHandler(){
    if(cheakInputEmptyOrNot()){
      setOutput(Number(fInput)/Number(sInput));
      setSuccess("Success")
    }
  }
  return (
    <div className='container'>
        <h1 className='calculator-heading'>React Calculator</h1>
        <div className="input-section">
        <div className="input-box">
          <input type="text" value={fInput} onChange={(e)=>setFInput(e.target.value)} placeholder='Num 1'/>
        </div>
        <div className="input-box">
          <input type="text" value={sInput} onChange={(e)=>setSInput(e.target.value)} placeholder='Num 2'/>
        </div>
        </div>
        <div className="btn-section">
          <button className='btn' onClick={additionHandler}>+</button>
          <button className='btn' onClick={subtrationHandler}>-</button>
          <button className='btn' onClick={multiplicationHanler}>*</button>
          <button className='btn' onClick={divisionHandler}>/</button> 
        </div>
        <div className="output-section">
          <div className="error">
            {error && <p>{error}</p>}
          </div>
          <div className="success">
            {sucess && <p>{sucess}</p>}
          </div>
          <div className="output">
          {output && <p>{output}</p>}
          </div>
        </div>
    </div>
  )
}

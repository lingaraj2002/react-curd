import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Form.css';

let a = [];
const Form = () => {
    const location = useLocation();
    const geting =location.state;
    const [getpass,passItem]=useState(geting);
    const [inpName,setName]=useState(getpass ? getpass[0].Name : '');
    const [inpDescription,setDescription]=useState(getpass ? getpass[0].Description : '');
    const [isCompleted,setIsCompleted]=useState(false)
    const [formSub,setFormsub]=useState(false)
   
  //   const inputName=(e)=>{
  //        console.log("e",e.target.value)
  //        setName(e.target.value)
  //   }

  //   const inputDes=(e)=>{
  //       console.log("e",e.target.value)
  //       setDescription(e.target.value)
  //  }
  const inputData=(e)=>{
    if(e.target.name==="name"){
      setName(e.target.value);
    }
    else{
      setDescription(e.target.value);
    }
  }

    const checked=(e)=>{
        setIsCompleted(e.target.checked?"true":"false")
    }

    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
        if(inpName==='' || inpDescription=== '')return
          const linga={
            Name:inpName, 
            Description:inpDescription,
             Answer:isCompleted
            }
            if(getpass != null){
              a[getpass[1]]=linga;
            }
            else{
              a.push(linga);
            }
        localStorage.setItem("formDetails",JSON.stringify(a))
        console.log(a);
      }

  return (
    <div id='form-sec'>
      <h1 className='form-h'>form</h1>
      <div className='form-container'>   
        <div className='form-row'>
          <div className='form-link'>
              <Link className="form-link-1" to={"/Home"}>home</Link>
          </div> 
          <div className='form-link'>
              <Link className="form-link-2" to={"/"}>login</Link>
          </div>
        </div>
        <form className='form-form' onSubmit={sub}>
            <input className="form-input" name='name' value={inpName} onChange={inputData} />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}<br/><br/>
            <input className="form-input" name='des' value={inpDescription} onChange={inputData} />    
            {inpDescription==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}<br/><br/>      
            <input className='form-checkbox' type='checkbox' value={isCompleted} onChange={checked}  id='checkbox'/>
            <label name='checkbox'>Its Completed</label><br/><br/>
            <input className="form-btn" type={"submit"}></input><br/><br/>
        </form>
        </div>
    </div>
  )
}

export default Form
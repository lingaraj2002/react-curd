import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {   
    // let h=JSON.parse(localStorage.getItem("formDetails"))
    // console.log(h);
  
  const gets = JSON.parse(localStorage.getItem("formDetails"));
  const [items,removeItems]=useState(gets);

  const deleteTask=(value)=>{
    delete gets[value];
    let d = gets.flat();
    localStorage.removeItem("formDetails");
    localStorage.setItem("formDetails",JSON.stringify(d));
    removeItems(d);
  }

  return (
    <div id='home-sec'>
        <h1 className='home-h'>home</h1>
      <div className='home-container'>
        <div className='home-row'>
          <div className='home-link'>
              <Link className="home-link-1" to={"/Form"}>Form</Link>
          </div>
          <div className='home-link'>
            <Link className="home-link-2" to={"/"}>Login</Link>
          </div>
        </div>
        <div className='home-card'>
            <table className='home-table'>
                  <tr className='home-tr'>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completed or Not</th>
                    <th>Edit and Delete</th>
                </tr>
                {items.map((value,i)=>{
                  return <tr key={i}>
                            <td>{value.Name}</td>
                            <td>{value.Description}</td>
                            <td>
                                <input
                                name={"output"}
                                type={"checkbox"}
                                checked={value.Answer}
                                />
                            </td>
                            <td>
                              <div className='ed-row'>
                                <div className='home-edit'>
                                  <Link className='home-link-3' to='/Form' state={[{Name:value.Name,Description:value.Description,Answer:value.Answer},i]}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                </div>
                                <div className='home-del'>
                                  <button onClick={()=>deleteTask(i)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                              </div>                            
                            </td>
                          </tr>
                      }
          )}                 
          </table> 
        </div>
      </div>
    </div>
  )
}

export default Home
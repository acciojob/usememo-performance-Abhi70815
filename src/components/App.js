
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData]= useState([]);
  const [status, setStatus]= useState("all");

  function storeTodoData(){
    let res= [];
    for(let i=0;i<50;i++){
      if(i%2!==0){
        res.push({name: `Todo ${i+1}`, status:"active"});
      }
      else{
        res.push({name:`Todo ${i+1}`, status:"completed"});
      }
    }
    setData(res);
  }
  const handleFilterData = data.filter((val,i)=>{
    if(status ==="all"){
      return true;
    }
    else if(status=== "active"){
      return val.status === "active";
    }
    else if(status === "completed"){
      return val.status ==="completed";
    }
  });

  useEffect(()=>{
    storeTodoData();
  },[]);
  return (
    <div>
      <div className="btn_box">
    <button onClick={()=>setStatus("all")}>All</button>
    <button onClick={()=>setStatus("active")}>Active</button>
    <button onClick={()=>setStatus("completed")}>Completed</button>
      </div>
      <hr/>
      <h2>Note : List is artificially slowed-down!</h2>
      <ul>
        {handleFilterData.map((val,i)=>{
          return(
            <li style={{ textDecoration: val.status === "completedd" ? "line-through": "none"}} key={i}>
             {val.name ?? ""}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

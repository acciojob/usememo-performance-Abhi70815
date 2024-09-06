import React from "react";
import { useState } from "react";

function Task(){
    const [tasks, setTask]= useState(50);
    setTask(50);
    const tasklist = Array(tasks).fill(0).map((_,index)=>{
        <li key={index}>Task{index}</li>
    });
    console.log(tasklist[0])
    return(
        <ul>
          {tasklist[0]}
        </ul>
    )
}
export default Task
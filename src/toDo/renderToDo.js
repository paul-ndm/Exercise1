import React, { useState } from "react"

export default function RenderTasks() {

    const [tasks, setTasks] = useState([])

    const addTask = (e) =>{
      
      let newTask = {id: Date.now(), name: e.target[0].value }
      setTasks([...tasks, newTask])
    }

    const handleChange = ({ target }) => {
      const {name, value} = target;
    }
    

    return (
    <div>
      <div>

      <form onSubmit={addTask}>
          
      <input type="text" value= "" onChange={handleChange} name="title" placeholder = "title"/>

      <input type="text" value= "" onChange={handleChange} name="description" placeholder = "description"/>
      
          
    
      <input type="submit" value="Submit" />
      </form>
      
      </div>

      <div>
          {tasks.map((task) => 
            (
            <div key={`${task.id}`}>
            <input 
            key={`title-${task.id}`}
            type = "text"
            value = {task.title}
            readonly = "readonly"
            />

            <input 
            key={`description-${task.id}`}
            type = "text"
            value = {task.description}
            readonly = "readonly"
            />

            <input
            key={`edit-${task.id}`}
            className = "edit"
            type = "submit"
            value = "edit"
            />

            <input
            key={`delete-${task.id}`}
            className = "eddeleteit"
            type = "submit"
            value = "delete"
            />
            </div>
            
    
          ))}
          
          </div>
          </div>
        
        )}
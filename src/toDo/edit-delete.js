import { useEffect, useState } from "react";

const ul = document.getElementById('todo-list');
ul.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    console.log('delete: ', e.target.parentNode.parentNode.getAttribute('id'));
  } else if (e.target.classList.contains('edit')) {
    console.log('edit');
  }
});

function inputWindow() {



  const [input, setInput] = useState([])
  
  


  render() {
    return (

    <form onSubmit={tasks.push({id: Date.now(),title: e.target[0].value, description: e.target[1].value})}>     
      
          
        <input type="text" value= "title"/>
        <input type="text" value= "description"/>       
      
      <input type="submit" value="Submit" />
    </form>
    );
  }
}
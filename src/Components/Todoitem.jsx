import React from 'react'
import './Css/Todoitem.css'
import tick from "./Assests/tick.png"
import not_tick from "./Assests/not_tick.png"
import cross from "./Assests/cross.png"

const Todoitem = (no,display,text,setTodos) => {

  const deletetodo = ({no})=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    data =data.filter((todo)=> todo.no!==no)
    setTodos(data);
  }

  const toggle=(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"))
    for(let i =0; i<data.length; i++)
    {
        if(data[i].no ===no){
          if(data[i].diaplay===""){
            data[i].display ="line-through";
          }
          else{
            data[i].display ="";
          }
          break;
        }
    }
    setTodos(data);
  }

  return (
    <div className='todoitems' >
      <div className={`todoitems-container ${display} `} onClick={()=>{toggle(no)}}>
        {display ===""?<img src={not_tick} alt='' />:<img src={tick} alt='' />}
        
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" onClick={()=>{deletetodo(no)}} src={cross} alt=''/>
    </div>
  )
}

export default Todoitem
import Navbar from './components/Navbar'
import './App.css'
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
// it gives unique id

function App() {
  
  useEffect(() => {
    let todoString=localStorage.getItem("todos");
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos) 
    }
  }, [])
  
  const [ShowFinished, setShowFinished] = useState(true)
  const[hash , sethash] = useState(window.location.hash)

  const [todo, setTodo] = useState("")
  // this is a todo
  const [todos, setTodos] = useState([])
  // this is an array which contains all todos 
  const saveToStorage = (params)=>{
    // to save todos in local storage
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const finished =() => {
    setShowFinished(!ShowFinished)

  //   if (!ShowFinished) {
  //   // Filter out and show only completed todos
  //   const completedTodos = todos.filter(todo => todo.isComplete);
  //   setTodos(completedTodos);
  // } 
  
  }
  

  const handleAdd =()=>{
      if(todo.trim()){
        // checking for empty string
        setTodos([...todos, {id: uuidv4(),todo,isComplete:false}])
        // id: uuidv4( this code give unique id to each todo
        setTodo("")
    }
  }

  const handleEdit =(e,id)=>{
    let t = todos.filter(i=>i.id===id)
    setTodo(t[0].todo)  
    let newTodos = todos.filter(item=>{
      return item.id!==id;
     });
     setTodos(newTodos);
  }

  const handleDelete =(e, id)=>{    
   let newTodos = todos.filter(item=>{
    return item.id!==id;
   });
   setTodos(newTodos);
  }

  const handleChange =(e)=>{
     setTodo(e.target.value)
  }

  const handleCheckbox =(e)=>{
     let id = e.target.name;
     let index = todos.findIndex(item =>{
        return item.id === id;
     }) 
     let newTodos = [...todos];
     newTodos[index].isComplete = !newTodos[index].isComplete;
     setTodos(newTodos);
  }


  return (
    <>
    <Navbar/>
    <div className='container mx-auto bg-slate-400 mx-auto my-5 
      rounded-2xl p-5 min-h-screen'>
        <div className="addTodo">
          <h2 className='text-xl font-bold'>Add A Todo</h2>
        <input
         onChange={handleChange} 
         onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
         value={todo} type="text"
          className='rounded-md h-8 w-2/4 p-3' />
      <button onClick={handleAdd}  
      className='bg-slate-800 hover:bg-slate-900 text-white p-3 py-1 rounded-lg
       m-6 font-bold'>Add</button>
        </div>
        <input onChange={finished} type="checkbox" checked={ShowFinished} />
         Show Finished TODO
      <h2 className='text-xl font-bold'>
      My Todos</h2>
      <div className="todos">

      {todos.length==0 && <div className='mx-44 p-10 font-semibold'>You have Not any TODO</div>}

        {todos.map((item)=>{

          return  (ShowFinished || !item.isCompleted) && <div key={item.id} 
          className="todo flex w-1/2 my-3 justify-between text-lg font-slate-900 ">
            <div className='flex gap-5'>
            <input name={item.id}
             onChange={handleCheckbox} type="checkbox"
             checked={item.isComplete} id="" />
          <div 
          className= {item.isComplete?"line-through":""}>{item.todo}</div>
            </div>
          <div className="buttons flex h-full">
          <button
           onClick={(e)=>{handleEdit(e,item.id)}} 
           className='bg-slate-800 hover:bg-slate-900 text-white p-3 py-1 rounded-lg 
          m-1 font-bold'><img className='h-7' src="src\assets\edit.svg" /></button>
          <button
           onClick={(e)=>{handleDelete(e,item.id)}} 
           className='bg-slate-800 hover:bg-slate-900 text-white p-3 py-1 rounded-lg 
          m-1 font-bold'><img className='h-7' src="src\assets\delete.svg"/></button>
          </div>
        </div>
          })}
      </div>
    </div>
    </>
  )
} 

export default App

// eslint-disable-next-line
import "./App.css";
import Header from "./mycomponents/Header";
import  { Todos} from "./mycomponents/Todos";
import  {Addtodo } from "./mycomponents/Addtodo";

import  {Footer} from "./mycomponents/Footer";
import React,{useState,useEffect} from "react"; 


function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo=[];
  }
  else{
    inittodo= JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    // localStorage.setItem("todos",JSON.stringify(todos));
   
  }
  const AddTodo=(title,descri)=>{
    console.log("i am doing this todo",title,descri)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno= todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      title:title,
      descri:descri,

    }
    setTodos([...todos,mytodo]);
    console.log(mytodo); 
  }
const [todos,setTodos]=useState(inittodo);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos]);

  return (
    <>
    <Header title={"My To Do List"}></Header>
    
    <Addtodo AddTodo={AddTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    

    

    <Footer/>
     
    </>
  );
}

export default App;

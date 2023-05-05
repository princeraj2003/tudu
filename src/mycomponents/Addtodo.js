import React, { useState } from 'react'

 export const Addtodo = (props) => {
  const [title,settitle]= useState("");
  const[descri,setdescri]=useState("");

  const submit=(e)=>{
e.preventDefault();
if(!title || !descri){
  alert("title and description cannot be blank")
}
props.AddTodo(title,descri);

settitle ("") ;
setdescri("") ;
  }  
  return (
    <div className='container'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="descri" className="form-label">Todo Description</label>
    <input type="text" value={descri} onChange={(e)=>{setdescri(e.target.value)}} className="form-control" id="descri"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>
    </div>
  )
}

//  export default Addtodo

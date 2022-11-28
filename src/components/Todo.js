import React from 'react';
import '../index.scss';


const Todo = ({value , addValue, setValue, allRemove}) => {
   
  const listener = e =>{
   setValue(e.currentTarget.value)
   
  }
  const  keyDown =  e  =>{  
   if (e.key === "Enter") {
      addValue(e);
      setValue('') 
    }
  }
 
   return ( 
   <div className='todo' >

      <input  value={value}
       onChange={listener} 
       onKeyDown ={keyDown}   type='text' placeholder='add todo'
       />
      <button onClick={addValue}  >+</button> 
      <button onClick={allRemove}  >all </button> 

   </div> 
   );
}
 
export default Todo

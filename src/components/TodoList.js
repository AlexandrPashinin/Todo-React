import React from 'react';
import '../index.scss';

const TodoList = ({todo , remove}) => {

 

   return (
   <div className='todo_list'>
     
      <ul >
      
       {todo.length > 0 ? (todo.map((item, i)=> <li key={i} 
       >
       <input    type="checkbox"/>
       {item}
       
      <button className='button_remove' onClick={()=>remove(item)}> x </button>
      </li>)):
       (<p className='no_todo' > no  todo  </p>)} 
         
         
      </ul>
      
   </div> 
   );
}
 
export default TodoList;
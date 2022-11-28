import  { useState, React} from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';


const App = () =>{
   const [todo , setTodo ] = useState([])
   const [value, setValue] = useState('')
 
   const  addValue =() =>{
      setTodo([...todo , value]) 
      setValue('')  
     
   }

   const allRemove = (index)=>{
    const allDelete = todo.filter(value=>value ===index)
    setTodo(allDelete)
   }

   const remove = ( index )=>{
    const newTodo = todo.filter(value=>value !==index)
    setTodo(newTodo)
  
   }
  return (
    <>
    <h1>To-do list for you</h1>
    <Todo value={value} setValue={setValue} addValue ={addValue } allRemove={allRemove} />
    <TodoList todo={todo} remove={remove} />
    
    </>
  );
}

export default App;

import React ,{useState}from 'react'
import { useDispatch } from 'react-redux';
import { addTodoToList } from '../redux/Actions';
const AddTodo = () => {
 const [input, setInput] = useState<string>('');
 const dispatch = useDispatch();
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(!input){
          alert("enter value");
          return;
        }
        dispatch(addTodoToList(input));
        setInput('');
       
       
    }
  return (
    <>
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
         type="text"  placeholder=' 📝 Add todo...'/>
        <i onClick={(e)=>handleSubmit(e)} title="Add to List" className='fa fa-plus'></i>
        <i className='fa fa-eraser' title='Erase input'
        onClick={()=>setInput('')}
        ></i>
       
        </form>
    </div>
    </>
  )
}

export default AddTodo;
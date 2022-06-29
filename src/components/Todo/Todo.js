import './Todo.css';
import { useEffect, useState } from 'react';
import GetData from './GetData';
function Todo() {
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    if(window.location.href.includes("update")){
      setDisplay(true)
    }else{
      setDisplay(false)
    }
  },[])
  return (
    <div className="App">
     <GetData/>
    </div>
  );
}

export default Todo;
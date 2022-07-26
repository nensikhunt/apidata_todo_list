// import './App.css';
import Todo from './components/Todo';
// import Deletedata from './components/Deletedata';
// import Updatedata from './components/Updatedata';
// import Adddata from './components/Adddata';
// import Getdata from './components/Getdata';
// import { useEffect, useState } from 'react'; 
// import Todo1 from './components/Todo/Todo';


function App() {
  // const [display, setDisplay] = useState(false);
  // useEffect(() => {
  //   if (window.location.href.includes("update")) {
  //     setDisplay(true);
  //   } else {
  //     setDisplay(false);
  //   }
  // }, [])
  // return (
  //   <div className="App">
  //     {
  //       display === true ? <Updatedata /> : <Adddata />
  //     }
  //     <Getdata />
  //     <Deletedata />
  //   </div>
  // );
  return (
    <>
      <Todo />
      {/* <Todo1 /> */}
    </>
  )
}

export default App;

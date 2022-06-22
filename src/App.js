import './App.css';
import Deletedata from './components/Deletedata';
import Updatedata from './components/Updatedata';
import Adddata from './components/Adddata';
import Getdata from './components/Getdata';
import { useEffect, useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("update")) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [])
  return (
    <div className="App">
      {
        display === true ?<> <Updatedata /> <Deletedata /> </>: <Adddata />
      }
      <Getdata />
    </div>
  );
}

export default App;

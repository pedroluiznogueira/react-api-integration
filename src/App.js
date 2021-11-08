import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from './services/list';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
          console.log(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
     <h1>My Grocery List</h1>

     {/* get method */}
     <ul>
       {
        list.map(
          item =>
           <li key={item.item}>
             {item.item}
          </li>
        )
       }
     </ul>

     {/* post method */}
     <form>
       <label>
         <p>New Item</p>
         <input type="text" />
       </label>
       <button type="submit">Submit</button>
     </form>
   </div>
  )
}

export default App;
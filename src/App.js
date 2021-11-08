import React, { useEffect, useState } from 'react';
import './App.css';
import { getList, setItem } from './services/list';

function App() {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput).then(
      () => {
        setItemInput('');
        setAlert(true)
      }
    )
  };

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

     {
      alert && <h2> Submit Successful</h2>
     }

     {/* post method */}
     <form onSubmit={handleSubmit}>
       <label>
         <p>New Item</p>
         <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput}/>
       </label>
       <button type="submit">Submit</button>
     </form>
   </div>
  )
}

export default App;
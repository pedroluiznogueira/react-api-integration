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
         console.log(list)
       }
     })
   return () => mounted = false;
 }, [])

  return(
    <>
    </>
  )
}

export default App;
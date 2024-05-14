
import './styles.css'

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/spacelab/bootstrap.min.css';


function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  const [loading, setLoading]= useState(true);
  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
  },[])
  console.log(data);

  return (
    <>
    {
    loading ? <h1>Cargando..</h1> : <h1></h1>
  }
    </>
  )
}

export default App









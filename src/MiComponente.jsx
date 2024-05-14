// import React from 'react';
import './styles.css';
import  {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/spacelab/bootstrap.min.css';

const MiComponente = () => {
 const [val, setVal] = useState()
const click =  () => {alert (val)   }
const change  =  event  => {  setVal(event.target.value) }

return(

    <>
        <div className='titulo'> <h3> hola <small className="text-body-secondary"> :) </small> </h3> </div>

         <div className="input-group mb-3">
               <input onChange={change} type="text" value ={val}  className="form-control" placeholder="Tarea..." aria-label="Recipient's username" aria-describedby="button-addon2">
                </input>
            <button onClick = {click} className="btn btn-primary" type="button" id="button-addon2">Añadir</button>
        </div>

       

    </>
);
}


export default MiComponente
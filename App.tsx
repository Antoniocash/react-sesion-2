import React, {useState} from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState("")
  const [TODO, setTODO] = useState([])

  return (
   <div className= "flex flex-col max-a-[500px] mx-auto my-20">
     <input className="border-2 border-blac-/40"
      value={value}
      onChange={({target}) => {
        console.log(target.value)
        setValue(target.value)
      }}
      />
     <button
     className="border-2 border-black/40"
     onClick={()=>{

     }}>
       Agregar tarea
        </button>
        <div className="border-2 border-red-500 my-5"> 
        </div>
     </div>
  );
}

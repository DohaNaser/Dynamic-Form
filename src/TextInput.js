import React ,{useState, useContext} from "react";
import { FormContext } from "./DynamicForm";

export default function Textinput({source , label, minLength}) {

  const [value,setValue]= useState()
  const [error,setError]= useState()

  const formContext=useContext(FormContext)

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={source}>{label}</label>
        <input className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type='text' name={source} minLength={minLength} onChange={
        (e) => { if(e.target.value.length <5 ) 
          {setError(label+" should be more than 5 caracteres")} else { 
            setError('') ;
            setValue(e.target.value);
            formContext(source,value)
          
          }
        }
        } required>
        </input>
        <p className="text-xs text-red-500 mb-2" > {error}</p>
       
    </div>
  )
}

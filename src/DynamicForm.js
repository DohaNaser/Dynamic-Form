import React ,{useState}from "react";


export const FormContext = React.createContext();

export default function Dynamicform({method, endpoint, Result ,children }) {

const [data, setData] = useState()


let handleSetValue = (name, value) => {
 
    setData(old => ({
        ...old,
        [name]: value
    }))
}

const submitForm = (e) =>{
    e.preventDefault()
    //console.log(data)
    fetch(endpoint, {
        method: method,
        body: data
    })
    .then(response => response.json())
    .then(Result)  
}

  return (
    <FormContext.Provider value={handleSetValue} >
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
       onSubmit={submitForm}>
          {children}
      </form>
    </FormContext.Provider>
  )
}

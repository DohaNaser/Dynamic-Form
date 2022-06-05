import React from "react";
import DynamicForm from './DynamicForm'
import NumberInput from './NumberInput'
import TextInput from './TextInput'


function App() {

  const handleResult=(data)=>{ 
    console.log(data)
    
  }


  return (

  
    <div className="w-full max-w-xs ml-8 mt-10 place-items-center" >
      <h1 className="text-2xl mb-4 text-center font-serif">Dynamic Form </h1>
      <DynamicForm method="post" endpoint="domain.com/api/users" Result={handleResult} >
       <TextInput source="firstName" label="First Name" minLength="5"></TextInput>
        <TextInput source="lastName" label="Last Name" minLength="5"></TextInput>
        <NumberInput label="Age" source="age" min='1' max='100' ></NumberInput>
        <input className="mx-12 mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           value="submit" type="submit">
         
        </input>
      </DynamicForm>
    </div>
  );
}

export default App;

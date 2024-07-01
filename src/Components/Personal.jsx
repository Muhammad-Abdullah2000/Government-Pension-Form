import React, { useState } from 'react'
import { db } from "./Firebase-config";
import { collection, addDoc } from "@firebase/firestore";
import '../styles/Personal.css';

function Personal() {
  const userCollectionRef1 = collection(db, "pInfo");

  const [newname, setNewname] = useState();
 


 

   const createUser1 = () => {

   if(newname.trim().length ===0){
    alert('Enter Your name Wisely')
   }
   else{
    addDoc(userCollectionRef1,{name:  newname });
   
    alert('data is submitted successfuly')
    setNewname('');
   }



    
    


  };



  return (
    <>
     <label htmlFor="" id='name'>Name.  <input type="text" id='name1' value={newname} onChange={(event) => { setNewname(event.target.value) }} /></label>
        <button onClick={createUser1}> Submit</button> 

    </>
  )
}

export default Personal

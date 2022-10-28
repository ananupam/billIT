import React from 'react'
import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const id= 0;

    const [bills, setBills]= useState([])
    

    function addElement(e){
      e.preventDefault()
      console.log("hello")
      console.log(name,city,gender)
        const dp= [
          ...bills,
        {
          id:id,
          name: name,
          city: city,
          gender: gender
        }
      ]


        console.log(dp)
        setBills(dp);
        id++;
        console.log("india")
        console.log(bills)
    }

    function deleteEntry(){
      console.log("delete called")
      // console.log(id);
      //  for(var i=0;i<bills.length;i++)
      //  {
      //   if(bills[i].id === id)
      //   {
      //      bills.splice(i,1);
      //      break;
      //    }
      //  }


     

    }

    
    
  return (
    <div>Home 
    <div>

        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <input
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
       
        <button className="bbutton1" onClick={addElement}>Add</button>
        {bills.length}

    

    </div>

    <div>
      {bills.map(val => {
        return (
          <div>
            <div >
            {val.name}
            {val.city}
            {val.gender} 
          </div>
          <div>
          <button className="button2" onClick={deleteEntry}>DELETE</button>
            </div>
         
            </div>
          
        );
      })}
    </div>

    
    </div>
  )
}


export default Home
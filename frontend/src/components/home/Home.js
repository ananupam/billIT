import React from 'react'
import { useState } from "react";
// import styled from "styled-components";
import './Home.css';
const Home = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");
    const [id,setId] = useState("");
    // const id= 0;

    const [bills, setBills]= useState([])
    

    function addElement(e){
      e.preventDefault()
      var idd=bills.length;
      setId(idd);
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
        // id++;
        console.log("india")
        console.log(bills)
    }

    function deleteEntry(id){
      console.log("delete called")
      console.log(id);
       for(var i=0;i<bills.length;i++)
       {
        if(bills[i].id === id)
        {
           bills.splice(i,1);
           break;
         }
       }

       const bills2 =[
        ...bills
       ];

setBills(bills2);
       console.log(bills);


     

    }

    function editEntry(id)
    {
      console.log(id);
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
       
        <button onClick={addElement}>Add</button>
        {bills.length}

    

    </div>

    <div>
      {bills.map(val => {
        return (
          <div className = "bills" key = {val.id}>
            <div >
            {val.name}
            {val.city}
            {val.gender} 
          </div>
          <div>
          <button onClick={()=>{deleteEntry(val.id)}}>DELETE</button>
            </div>
            <div>
          <button onClick={()=>{editEntry(val.id)}}>Edit</button>
            </div>
         
            </div>
          
        );
      })}
    </div>

    
    </div>
  )
}


// const Div = styled.div`
// disply: flex;
// flex-direction: row;
// `;


export default Home
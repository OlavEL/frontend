import { useState } from "react";
import LoginService from "../Service/LoginService";
import { json } from "react-router-dom";


const InnloggCustomer = () => {
const [brukernamn, setbrukernamn] = useState(0);
const [passord, setPassord] = useState(0);
const [logins, setLogins] = useState([]);
const [allLogins, setAllLogins] = useState([]);


const getAllLogins = async()=>{
    const response = await LoginService.getAllLogins();
    setLogins(response);
    setAllLogins(response);
}
const addlogin = (newLogin) => {
    setLogins([...logins, newLogin]);
};

const getLoginById = async (loginid) =>{
    const foundLogin = allLogins.find((login) => 
    login.id === parseInt(loginid));
    if(foundLogin != null) {
        setLogins([foundLogin]);
    } else {
        setLogins([]);
    }

}
const InputChange= (e) => {
setbrukernamn(e.target.value);
}

const InputChange1= (e) => {
    setPassord(e.target.value);
     }
const LoginHandle = async () => {

const response = await fetch("https://localhost:7082/login", {
method :"POST",
headers: {
"Content-Type": "application/json"
},
body:JSON.stringify({
brukernamn,
passord

})
});

if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
const data = await response.json();
console.log(data);
if (data.exists) {
   
    alert('Wohoo! Inputs match the database.');
  } else {
    
    alert('Inputs do not match the database.');
  }
};



return(

<div>
<div className="Input flex flex-col items-center justify-center">
<input
type="text"
value={brukernamn}
onChange={InputChange}
className="w-1/4 p-2 mt-10  border-black border-2 rounded"

/>
<input
type="text"
value={passord}
onChange={InputChange1}
className="w-1/4 p-2 mt-5 border-black border-2 rounded"
/>

<button onClick={LoginHandle}> Login </button>


</div>


</div>

)
}
export default InnloggCustomer;
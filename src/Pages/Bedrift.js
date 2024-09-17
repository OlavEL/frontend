import { useState } from "react";
import "./Bedrift.css";
import AddJobb from "../Components/AddJobb";




const Bedrift = () =>{
   
    const [jobs, setJobs] = useState([]);
    

   
    const addJobToPage = (newJob) => {
        
        setJobs((prevJobs) => [...prevJobs, newJob]);
    };
 


               
return(


<div className="box1-container">
   
    
    <div className="box1">
        <div className="inputs">

         <button > 
                    <AddJobb onAddJobb={addJobToPage} />
                </button>



 
    

    </div>
   
    </div>
  </div>

)
}
export default Bedrift;
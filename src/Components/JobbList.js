import JobbItem from "./JobbItem";
import {useState} from "react";
import UpdateJobb from "./UpdateJobb";
import JobbService from "../Service/JobbService";
import "../Components/Styling.css"




const JobbList =({jobs, setJobs})=>{

    const [updatedJobsId, setUpdatedJobsId] = useState({});
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);

    const handleDeleteJobb =async (id) =>{
        try{
            await JobbService.deleteJobb(id);
            const jobsAfterDelete = jobs.filter((jobb=>jobb.id!==id));
            setJobs(jobsAfterDelete);
        }catch(error) {
            console.log(error)
        }

    }
    const toggleUpdateForm = (jobb)=>{
        setIsUpdateVisible(!isUpdateVisible);
        setUpdatedJobsId(jobb.id);
    }

    const handleUpdateJobb= async(updatedJobb)=>{
        try{
            const jobsAfterUpdate = jobs.map((jobb)=>
            jobb.id===updatedJobb.id? updatedJobb:jobb);
            setJobs(jobsAfterUpdate);
            setIsUpdateVisible(false); 
         }catch(error) {
            console.log(error)
        }
    }

    return(
        
        <div className="bg-gray-500 p-4">
            <h1 className="text-white text-xl mb-4">Jobber</h1>
            <div className="flex-container">
        {jobs.map((jobb=>(
                
                    <div key={jobb.id} className="jobb-item-container">
                <JobbItem jobb={jobb}></JobbItem> 
                
                <br></br>
                <button 
                    className="bg-red-500 hover:bg-red-700 test-white fond-bold rounded px-4 py-2 "
                    onClick={()=>handleDeleteJobb(jobb.id)}
                    >Slett
                </button>
               
                <button 
                    className="bg-blue-500 hover:bg-blue-700 test-white fond-bold rounded px-4 py-2"
                    onClick={()=>toggleUpdateForm(jobb)}
                    >Endre
                </button>
                { isUpdateVisible && updatedJobsId===jobb.id && (
                    <UpdateJobb
                    jobb={jobb}
                    onUpdateJobb={handleUpdateJobb}/>
                )}
                <br></br>
                <br></br>
                </div>
                
                
            )))}
            {!jobs.length && (
            <p className="text-red-500 text-lg mt-2">Fant Ingen Jobber</p>
            )}
        </div>
        </div>


    )
}

export default JobbList;
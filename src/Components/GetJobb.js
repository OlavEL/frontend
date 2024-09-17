import React, { useState } from 'react';
import AlleJobberService from '../Service/AlleJobberService';
import "../Components/Styling.css"

const GetJobb = ({ onGetJobb }) => {
    const [bedrift, setjobbbedrift] = useState("");

    const handleGetJobb = async ()=>{

        const JobData = await AlleJobberService.getJobsById(bedrift)
        onGetJobb(JobData)
    }

    return(
        <div>
        <div className='Menu'>
        <input
            type="text"
            placeholder="Jobb Name"
            value={bedrift}
            onChange={(e) => setjobbbedrift(e.target.value)}
            className=" Menu w-full  p-2 border-gray-300 rounded"
        />
        <div className='button1'>
        <button 
        
        onClick={handleGetJobb}
        className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded"
        >Finn Jobb</button>
        </div>
        </div>
        </div>
    );
}
export default GetJobb;

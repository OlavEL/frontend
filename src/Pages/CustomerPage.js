import {useState} from "react";
import {useEffect} from "react";
import AddJobb from "../Components/AddJobb";
import CustomerJobbList from "../Components/CustomerJobbList";
import GetJobb from "../Components/GetJobb";
import JobbService from "../Service/JobbService";

const CustomerPage = () => {

    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    const getAllJobs = async()=>{
        const response = await JobbService.getAllJobs();
        setJobs(response);
        setAllJobs(response);
    }
    const addJobb = (newJobb) => {
        setJobs([...jobs, newJobb]);
    };
    const getJobsById = async (jobbid) =>{
        const foundJobb = allJobs.find((jobb) => 
        jobb.id === parseInt(jobbid));
        if(foundJobb != null) {
            setJobs([foundJobb]);
        } else {
            setJobs([]);
        }

    }
    const resetJobs = async() => {
        await getAllJobs();
      };
    useEffect(()=>{
        getAllJobs();
    },[]);
    return(
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl text-white font-bold mb-4 ">Jobber</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               
                <div className="grid grid-rows-[1fr auto] h-full">
                    <div className="row-span-1">
                        <GetJobb onGetJobb={getJobsById} />
                    </div>
                    <div className="row-span-1 flex flex-col-reverse">
                        <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={resetJobs}
                        >
                        Tilbakestill
                        </button>
                </div>
            </div>
        </div>

        <div className="mt-8">
          <CustomerJobbList jobs={jobs} setJobs={setJobs}  />
        </div>
      </div>
    )
}

export default CustomerPage;
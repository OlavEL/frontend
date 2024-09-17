import axios from "axios";
const JobbService = (
    ()=>{
        const jobb_url="https://localhost:7082/jobb";
        const addJobb = async (newJobb) => {
            try{
                const response= await axios.post(jobb_url, newJobb);
            }catch(error) {
                console.log(error)
            }
        }
        const deleteJobb = async (id) => {
            try {
                await axios.delete(`${jobb_url}/${id}`);
              
            } catch (error) {
                console.error("There was an error deleting the Jobb:", error);
            }
        }
        const updateJobb = async (updatedJobb) => {
            try {
                const response = await axios.put(`${jobb_url}/${updatedJobb.id}`, updatedJobb);
            } catch (error) {
                console.error("There was an error updating the burger:", error);
            }
        }
        const getAllJobs = async() =>{
            try {
                const response = await axios.get(jobb_url);
                return response.data;
            } catch (error) {
                console.error("Error fetching bedrift", error);
                return [];
            }
        }
        const getJobsById = async(name) =>{
            try {
                const response = await axios.get(`${jobb_url}/${name}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching bedrift", error);
                return [];
            }
        }
        return {
            addJobb,
            deleteJobb,
            updateJobb,
            getAllJobs,
            getJobsById
        }
    }
)();
export default JobbService;
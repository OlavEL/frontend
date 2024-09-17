import "../Components/Styling.css"

const image_url= "https://localhost:7082/images";
const JobbItem =({jobb})=>{
    return(
        <div className="bg-white p-4 rounded shadow">
            {jobb.image && <img className="image" src={`${image_url}/${jobb.image}`} alt={`Bilde ${jobb.id}`} />}
            <br></br>
            <p>  {jobb.id}</p>
            <p>  {jobb.bedrift}</p>
            <p>  {jobb.tittel}</p>
            <p>  {jobb.stilling}</p>
            <p>  {jobb.periode}</p>
            <p>  {jobb.beskrivelse}</p>
         

        

          </div>
          
    )
}
export default JobbItem;
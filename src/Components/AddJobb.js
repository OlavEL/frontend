import React, { useState } from 'react';
import ImageUploadService from '../Service/ImageUploadService';
import JobbService from '../Service/JobbService';
import AlleJobberService from '../Service/AlleJobberService';


const AddJobb = ({ onAddJobb }) => {
    const [image, setImage] = useState(null);
    const [newJobb, setNewJobb] = useState({

       
        bedrift: "",
        tittel: "",
        stilling: "",
        periode: "",
        beskrivelse: "",
        image: "",
    });
    const [imageUploadStatus, setImageUploadStatus] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setNewJobb({ ...newJobb, image: file.name });
    };



    const handleAddNewJobb = async()=>{
        setImageUploadStatus("Uploading image...");
        try{
          if( image!= null){
                await ImageUploadService.uploadImage( image );
            }
            setImageUploadStatus("Uploading image finished");
        }
        catch(error) {
            setImageUploadStatus("Upload failed");
        }        
        try{
            const response = await JobbService.addJobb(newJobb);
            const responseAlleJobber = await AlleJobberService.addJobb(newJobb);
            onAddJobb(newJobb);
            setNewJobb({  bedrift: "", tittel: "", stilling: "", periode: "", beskrivelse: "", image: "" });
        }catch(error) {
            console.log(error)
        } 
        alert("Jobbstilling lagt ut");
    }
    return(
        <div>
            
            <div>
                
                <input
                    type="text"
                    placeholder="Bedrift"
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                    value={newJobb.bedrift}
                    onChange={(e)=>setNewJobb({...newJobb, bedrift: e.target.value})}
                ></input>
                <input
                    type="text"
                    placeholder="Tittel"
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                    value={newJobb.tittel}
                    onChange={(e)=>setNewJobb({...newJobb, tittel: e.target.value})}
                ></input>
                 <input
                    type="text"
                    placeholder="Stilling"
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                    value={newJobb.stilling}
                    onChange={(e)=>setNewJobb({...newJobb, stilling: e.target.value})}
                ></input>
                     <input
                    type="text"
                    placeholder="Periode"
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                    value={newJobb.periode}
                    onChange={(e)=>setNewJobb({...newJobb, periode: e.target.value})}
                ></input>
                     <input
                    type="text"
                    placeholder="Beskrivelse"
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                    value={newJobb.beskrivelse}
                    onChange={(e)=>setNewJobb({...newJobb, beskrivelse: e.target.value})}
                ></input>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 mt-3 border-gray-300 rounded"
                ></input>
                <button
                    onClick={handleAddNewJobb}
                    
                    className="w-full bg-blue-500 mt-3 text-white hover:bg-blue-700 font-bold p-2 rounded"
                >
              Legg til ny stilling
                </button>
            </div>
            {imageUploadStatus && <p>{imageUploadStatus}</p>}
        </div>
    )

}
export default AddJobb;

import React, { useState } from 'react';
import axios from 'axios';
import ImageUploadService from '../Service/ImageUploadService';
import JobbService from '../Service/JobbService';
// the page for updating burgers
const UpdateJobb = ({ jobb, onUpdateJobb }) => {

    const [updatedImage, setUpdatedImage] = useState(null);
    const [updatedJobb, setUpdatedJobb] = useState({
        id: jobb.id,
        bedrift: jobb.bedrift,
        tittel: jobb.tittel,
        stilling: jobb.stilling,
        periode: jobb.periode,
        beskrivelse: jobb.beskrivelse,
        image: jobb.image
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUpdatedImage(file);
        setUpdatedJobb({ ...updatedJobb, image: file.name });
    };

    const handleUpdateJobb = async () => {
        try {
            if (updatedImage != null) {
                await ImageUploadService.uploadImage(updatedImage);
            }
            const response = await JobbService.updateJobb(updatedJobb);
            onUpdateJobb(updatedJobb); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
        <input
            type="text"
            placeholder="id"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.id}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, id: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="Bedrift"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.bedrift}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, bedrift: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="Tittel"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.tittel}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, tittel: e.target.value })}
        ></input>
         <input
            type="text"
            placeholder="Stilling"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.stilling}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, stilling: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="Periode"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.periode}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, periode: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="Beskrivelse"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedJobb.beskrivelse}
            onChange={(e) => setUpdatedJobb({ ...updatedJobb, beskrivelse: e.target.value })}
        ></input>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border-gray-300 rounded"
        ></input>
        <button
            className="bg-red-500 hover:bg-red-700 test-white fond-bold rounded px-4 py-2"
            onClick={handleUpdateJobb}
        >
            Fullfør Oppdatering
        </button>
        </div>
    );
};

export default UpdateJobb;

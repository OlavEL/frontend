import React, { useState } from 'react';

const GetLogin = ({ onGetLogin }) => {
    const [jobbid, setjobbid] = useState("");

    const handleGetJobb = ()=>{
        onGetLogin(jobbid);
        setjobbid("");
    }

    return(
        <div>
        <input
            type="text"
            placeholder="Jobb id"
            value={jobbid}
            onChange={(e) => setjobbid(e.target.value)}
            className="w-full p-2 border-gray-300 rounded"
        />
        <button 
        onClick={handleGetJobb}
        className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded"
        >Finn Jobb</button>
        </div>
    );
}
export default GetLogin;

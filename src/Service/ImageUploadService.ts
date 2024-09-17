import axios from "axios";
const ImageUploadService = (
    ()=>{

        const imageUploadEndpoint = "https://localhost:7082/uploadImage";

      
        const uploadImage = async (image: File) => {
          
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios({
                url: imageUploadEndpoint,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" } 
            });

            formData.delete("file");
        }

        return {
            uploadImage
        }
    }
)();
export default ImageUploadService;
// import { useCallback, useRef, useState } from "react";
// import InputFiled from "./InputFiled";
// import axios from "axios";
// import "./Upload.css";
// export default function UploadFile({onSuccessUpload}){
//     const [formData,setFormData] = useState({
//         title:'',
//         description:'',
//         thumbnailUrl:'',
//         videoUrl:''
//     })
//     const handleUpdateDB = useCallback(async ()=>{
//         const file = await axios.post('http://localhost:3000/Neonflake/createFIle',formData)
//         .then(res=>{
//             console.log(res)
//             return res
//         })
//         .catch(err=>{
//             console.log(err)
//             return err
//         })
//         onSuccessUpload(formData)
//         console.log(file)
//     },[formData, onSuccessUpload])
//     const formRef = useRef()
//     const handleSubmit = async (e)=>{
//         e.preventDefault()
//         let image = formRef.current[3].files[0];
//         let video = formRef.current[2].files[0];
//         let imageUploadSuccess =false;
//         let videoUploadSuccess = false;
//         if(image){
//             const imageData = new FormData();
//             imageData.set('file',image)
//             imageData.append('upload_preset', 'neonflake');
//         try{
//             const res = await axios.post('https://api.cloudinary.com/v1_1/ddlhvkrq2/image/upload',imageData)
//             console.log(res.data.secure_url,"imageUrl")
//             image = res.data.secure_url
//             imageUploadSuccess = true
//         }catch (error) {
//             console.error('Error uploading video:', error);
//           }           
//         }
//         if(video){
//             const videoData = new FormData()
//             videoData.set('file',video)
//             videoData.append('upload_preset','neonflake')
//             try{
//                 const res = await axios.post("https://api.cloudinary.com/v1_1/ddlhvkrq2/video/upload",videoData)
//                 console.log(res.data.secure_url,"videoUrl")
//                 video =res.data.secure_url
//                 videoUploadSuccess = true
//             }
//             catch (error) {
//                 console.error('Error uploading video:', error);
//               }  
//         }
//         setFormData((prevState)=>{
//             return{
//                 ...prevState,
//                 title:formRef.current[0].value,
//                 description:formRef.current[1].value,
//                 thumbnailUrl:image,
//                 videoUrl:video
//             }
//         })
//         console.log(formData,"this should update to backend DB")
//         if(imageUploadSuccess && videoUploadSuccess){
//             handleUpdateDB()
//         }
//     }
    
//     return(
//         <div className="container">
//             <form ref={formRef} onSubmit={handleSubmit} className="form">
//                 <InputFiled Title="Title" type="text" maxLength="50" ></InputFiled>
//                 <InputFiled Title="Description" textarea maxLength="200"></InputFiled>
//                 <InputFiled Title="Upload Video" type="file" accept=".mpg,.avi,.mp4"></InputFiled>
//                 <InputFiled Title="Upload Image" type="file" accept=".jpg,.png"></InputFiled>
//                 <button type="submit" className="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
import { useCallback, useRef, useState, useContext } from "react";
import InputFiled from "./InputFiled";
import axios from "axios";
import { FileContext } from "./FileContext";
import "./Upload.css";

export default function UploadFile() {
  const { handleSuccessUpload } = useContext(FileContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnailUrl: '',
    videoUrl: ''
  });

  const formRef = useRef();

  const handleUpdateDB = useCallback(async () => {
    try {
      const res = await axios.post('http://localhost:3000/Neonflake/createFile', formData);
      console.log(res);
      handleSuccessUpload(formData);
    } catch (err) {
      console.error("Error updating database:", err);
    }
  }, [formData, handleSuccessUpload]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = formRef.current[3].files[0];
    let video = formRef.current[2].files[0];
    let imageUrl = '';
    let videoUrl = '';
    let imageUploadSuccess = false;
    let videoUploadSuccess = false;

    if (image) {
      const imageData = new FormData();
      imageData.set('file', image);
      imageData.append('upload_preset', 'neonflake');

      try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/ddlhvkrq2/image/upload', imageData);
        imageUrl = res.data.secure_url;
        imageUploadSuccess = true;
        setFormData((prevState) => ({
          ...prevState,
          thumbnailUrl: imageUrl
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    if (video) {
      const videoData = new FormData();
      videoData.set('file', video);
      videoData.append('upload_preset', 'neonflake');

      try {
        const res = await axios.post("https://api.cloudinary.com/v1_1/ddlhvkrq2/video/upload", videoData);
        videoUrl = res.data.secure_url;
        videoUploadSuccess = true;
        setFormData((prevState) => ({
          ...prevState,
          videoUrl: videoUrl
        }));
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      title: formRef.current[0].value,
      description: formRef.current[1].value
    }));

    if (imageUploadSuccess && videoUploadSuccess) {
      handleUpdateDB();
    }
  };

  return (
    <div className="upload-container">
      <form ref={formRef} onSubmit={handleSubmit} className="upload-form">
        <InputFiled Title="Title" type="text" maxLength="50" />
        <InputFiled Title="Description" textarea maxLength="200" />
        <InputFiled Title="Upload Video" type="file" accept=".mpg,.avi,.mp4" />
        <InputFiled Title="Upload Image" type="file" accept=".jpg,.png" />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

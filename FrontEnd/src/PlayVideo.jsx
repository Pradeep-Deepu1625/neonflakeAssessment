// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./PlayVideo.css";

// export default function PlayVideo() {
//   const { id } = useParams();
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchFile = useCallback(async () => {
//     try {
//       const res = await axios.get(`http://localhost:3000/Neonflake/${id}`);
//       setFile(res.data);
//     } catch (error) {
//       console.error("Error fetching file:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchFile();
//   }, [fetchFile]);

//   if (loading) return <div>Loading....!</div>;

//   return (
//     <div className="video-container">
//       {file ? (
//         <video src={file.videoUrl} controls width="600px" height="400px" autoPlay />
//       ) : (
//         <div>Error loading video.</div>
//       )}
//     </div>
//   );
// }
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VideoPlay.css";

export default function PlayVideo() {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFile = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Neonflake/${id}`);
      setFile(res.data);
    } catch (error) {
      console.error("Error fetching file:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchFile();
  }, [fetchFile]);

  if (loading) return <div>Loading....!</div>;

  return (
    <div className="video-container">
      {file ? (
        <video src={file.videoUrl} controls width="600px" height="400px" autoPlay />
      ) : (
        <div>Error loading video.</div>
      )}
    </div>
  );
}

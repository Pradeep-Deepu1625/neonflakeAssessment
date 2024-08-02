// import { Link } from "react-router-dom";
// import "./DisplayFiles.css";

// export default function DisplayFiles({ displayData }) {
//   return (
//     <div className="display-container">
//       <h1>Display</h1>
//       <ul className="file-list">
//         {displayData.map((file) => (
//           <li key={file._id} className="file-item">
//             <Link to={`/PlayVideo/${file._id}`} className="file-link">
//               <div className="file-content">
//                 <img src={file.thumbnailUrl} alt={file.title} className="thumbnail" />
//                 <h2>{file.title}</h2>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FileContext } from "./FileContext";
import "./Display.css";

export default function DisplayFiles() {
  const { display } = useContext(FileContext);

  return (
    <div className="display-container">
      <h1>Display</h1>
      <ul className="file-list">
        {display.map((file) => (
          <li key={file._id} className="file-item">
            <Link to={`/PlayVideo/${file._id}`} className="file-link">
              <div className="file-content">
                <img src={file.thumbnailUrl} alt={file.title} className="thumbnail" />
                <div className="file-info">
                  <h2>{file.title}</h2>
                  <p className="file-description">{file.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


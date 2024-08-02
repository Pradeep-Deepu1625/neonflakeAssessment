// import { useCallback, useEffect, useState } from 'react';
// import UploadFile from './UploadFile';
// import axios from 'axios';
// import DisplayFiles from './DisplayFiles';
// import PlayVideo from './PlayVideo';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';

// const App = () => {
//   const [display, setDisplay] = useState([]);

//   const fetchFiles = useCallback(async () => {
//     try {
//       const { data } = await axios.get('http://localhost:3000/Neonflake');
//       setDisplay(data);
//     } catch (error) {
//       console.error("Error fetching files:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchFiles();
//   }, [fetchFiles]);

//   const handleSuccessUpload = (newFile) => {
//     setDisplay((prevState) => [...prevState, newFile]);
//   };

//   return (
//     <>
//       <Router>
//         <nav>
//           <Link to='/DisplayFiles'>
//             <label>Listed Files</label>
//           </Link>
//           <Link to='/UploadFile'>
//             <label>Upload New File</label>
//           </Link>
//         </nav>
//         <Routes>
//           <Route path='/UploadFile' element={<UploadFile onSuccessUpload={handleSuccessUpload} />} />
//           <Route path='/DisplayFiles' element={<DisplayFiles displayData={display} />} />
//           <Route path='/PlayVideo/:id' element={<PlayVideo />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UploadFile from './UploadFile';
import DisplayFiles from './DisplayFiles';
import PlayVideo from './PlayVideo';
import { FileProvider } from './FileContext';
import './index.css';

const App = () => {
  return (
    <FileProvider>
      <Router>
        <nav>
          <Link to='/DisplayFiles'>
            <label>Listed Files</label>
          </Link>
          <Link to='/UploadFile'>
            <label>Upload New File</label>
          </Link>
        </nav>
        <Routes>
          <Route path='/UploadFile' element={<UploadFile />} />
          <Route path='/DisplayFiles' element={<DisplayFiles />} />
          <Route path='/PlayVideo/:id' element={<PlayVideo />} />
        </Routes>
      </Router>
    </FileProvider>
  );
};

export default App;

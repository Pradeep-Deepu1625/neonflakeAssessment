import { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [display, setDisplay] = useState([]);

  const fetchFiles = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/Neonflake');
      setDisplay(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const handleSuccessUpload = (newFile) => {
    setDisplay((prevState) => [...prevState, newFile]);
  };

  return (
    <FileContext.Provider value={{ display, handleSuccessUpload }}>
      {children}
    </FileContext.Provider>
  );
};

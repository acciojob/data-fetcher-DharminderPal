import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
   
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setData(result); 
      })
      .catch((err) => {
        setError(err.message); 
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, []); 

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!!error && <p>An error occurred: {error}</p>}
      {!!data && (
        <>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
      {!data && !isLoading && !error && <p>No data found</p>}
    </div>
  );
};

export default App;




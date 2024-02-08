import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rate() {
  // State to hold the fetched data
  const [data, setData] = useState(null);
  // State to hold loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to hold error status
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Axios GET request to fetch data
    axios.get('https://statuesque-cobbler-40d17b.netlify.app/rate')
      .then(response => {
        // Update state with fetched data
        setData(response.data);
        // Set loading to false
        setIsLoading(false);
      })
      .catch(error => {
        // Handle errors
        setError(error);
        // Set loading to false
        setIsLoading(false);
      });
  }, []);

  // If loading, display loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If error, display error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If data is fetched successfully, display it
  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{data}</p>
    </div>
  );
}

export default Rate;

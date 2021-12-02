import { useState, useEffect } from 'react';
const useFetchMovies = (url) => {
  const [data, setData] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [dataMovieCast, setdataMovieCast] = useState([]);  
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data.results || data.cast);;
        setDataMovie(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])
  return { data, dataMovie,isPending, error };
}
 
export default useFetchMovies;
import { useState, useEffect } from 'react';
const useFetchMovies = (url) => {
  const [dataMovieCast, setDataMovieCast] = useState([]);  


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
        setDataMovieCast(data.cast);
     
      })
      .catch(err => {
         console.log(err)
      })
    }, 1000);
  }, [url])
  return { dataMovieCast };
}
 
export default useFetchMovies;
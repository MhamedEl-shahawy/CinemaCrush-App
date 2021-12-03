import { useState, useEffect } from 'react';
const useFetchVideos = (url) => {
  const [dataMovieTrailer, setDataMovieTrailer] = useState([]);  


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
        setDataMovieTrailer(data.results);
        console.log(dataMovieTrailer)
     
      })
      .catch(err => {
         console.log(err)
      })
    }, 1000);
  }, [url])
  return { dataMovieTrailer };
}
 
export default useFetchVideos;
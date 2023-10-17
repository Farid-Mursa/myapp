import React, { useState, useEffect } from 'react';

function Cinema() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fakeApi = [
        {
          id: 1,
          image:
            "https://www.cinemaplus.az/site/assets/files/0/25/07/529/ufcsite-1.350x0.jpg",
          title: "Best Movie",
        },
        {
            id: 2,
            image:
              "https://www.cinemaplus.az/site/assets/files/0/28/91/141/footballsite-21-okt.350x0.jpg",
            title: "Best Movie",
          },
          {
            id: 3,
            image:
              "https://www.cinemaplus.az/site/assets/files/0/28/64/444/orig.350x0.jpg",
            title: "Best Movie",
          },
          {
            id: 4,
            image:
              "https://www.cinemaplus.az/site/assets/files/0/26/33/858/site.350x0.jpg",
            title: "Best Movie",
          },
    ]
    setMovies(fakeApi);
  }, []);

  return (
    <div id='Body'>
        <div className='container'>
            <div className="row">
               {movies.map((movie) => (
                 <div className="col-3">
                 <div className='title-image'>
                     <div className='title'>
                         <p>{movie.title}</p>
                     </div>
                     <div className='image'>
                        <img src={movie.image} alt="Movie" />
                        <div className='before'>
                            <p>Onceden Satis</p>
                        </div>
                     </div>
                     <div className='foot'>
                        <p>
                            <img src="https://www.cinemaplus.az/site/templates/images/icons2022/ru.png?v2" alt="Bayraq" />
                        </p>
                        <p>
                            <img src="https://www.cinemaplus.az/site/templates/images/icons2022/twod.png?v2" alt="2d" />
                        </p>
                     </div>
                     <div className='seans'>
                        <p className='ss'>Seanslar</p>
                        <p className='old'> 18+</p>
                     </div>
                     
                 </div>
             </div>

               ))}
            </div>
        </div>
    </div>
  );
}

export default Cinema;
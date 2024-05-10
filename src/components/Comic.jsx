import React, { useState, useEffect } from 'react';
import comic1 from "./img/comics/Snoopy1.jpg";
import comic2 from "./img/comics/Snoopy2.jpg";
import comic3 from "./img/comics/Snoopy3.jpg";
import comic4 from "./img/comics/Snoopy4.jpg";
import comic5 from "./img/comics/Snoopy5.jpg";
import comic6 from "./img/comics/Snoopy6.jpg";
import comic7 from "./img/comics/Snoopy7.jpg";
import comic8 from "./img/comics/Snoopy8.jpg";
import comic9 from "./img/comics/Snoopy9.jpg";
import comic10 from "./img/comics/Snoopy10.jpg";
import comic11 from "./img/comics/Snoopy11.jpg";
import comic12 from "./img/comics/Snoopy12.jpg";
import comic13 from "./img/comics/Snoopy13.jpg";

function Comic() {
  // List of comic images
  const comicImages = [comic1, comic2, comic3, comic4, comic5, comic6, comic7, comic8, comic9, comic10, comic11, comic12, comic13];

  // State to hold the selected comic image
  const [selectedComic, setSelectedComic] = useState(null);

  // Function to select a random comic
  const selectRandomComic = () => {
    const randomIndex = Math.floor(Math.random() * comicImages.length);
    setSelectedComic(comicImages[randomIndex]);
  };

  // Select a random comic on component mount
  useEffect(() => {
    selectRandomComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency array means this effect runs only once on mount


  return (
    <div class="comicstrip">
      {selectedComic ? (
        <img
          id="comicimg" 
          src={selectedComic} 
          alt="Comic" 
        />
      ) : (
        <p>No comic selected</p>
      )}
    </div>
  );
}

export default Comic;

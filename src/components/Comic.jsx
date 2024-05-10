import React, { useState, useEffect } from 'react';
import comic1 from "./img/comics/Snoopy1.jpg";
import comic2 from "./img/comics/Snoopy2.jpg";
import comic3 from "./img/comics/Snoopy3.jpg";

function Comic() {
  // List of comic images
  const comicImages = [comic1, comic2, comic3];

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

import React, { useState, useEffect } from 'react';


const BackgroundVideo = ({ videos }) => {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change the interval as per your preference (in milliseconds)

    return () => clearInterval(interval);
  }, [videos]);
    
    const handleExplore = () => {
        window.location.href = '/home';
    }

  return (
    <div className="relative h-screen w-full">
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 flex items-center h-full justify-center">
        <div className="text-center">
        <h1 className="text-white text-6xl font-bold ">Explore Our Famous Manga Here</h1>
        <button className=" mt-5 text-white font-semibold px-8 py-4 hover:bg-white hover:text-black border-4 rounded-2xl " onClick={handleExplore}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;

import React from 'react';
import Navbar from './Navbar';
import ExpandableSection from './ExpandableSection'
const VideoPlayer = () => {
  return (
    <>
    <div className="drive-video ">
      <iframe
        src="https://drive.google.com/file/d/1C26unNzIcxaBRF3TldqXqztdU3OlagU5/preview"
        width="1522"
        height="634"
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
    <Navbar/>


    </>
  );
};

export default VideoPlayer;

import React from 'react';
import ReactPlayer from 'react-player'


function Video({volumes,videos}) {
    return (
        <div className="video-content">
          <ReactPlayer loop volume={volumes} url={videos}/>
        </div>
    )
}

export default Video
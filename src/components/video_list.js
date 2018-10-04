import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  if(!videos) {
    return <div>Loading</div>
  }
  const VideoItems =  videos.map((video) => { 
        return <VideoListItem key={video.etag} video = {video} onVideoClick={onVideoSelect} /> 
    })

    return (
       <ul className="col-md-4 list-group">
         {VideoItems}
       </ul>
    );
}

export default VideoList;
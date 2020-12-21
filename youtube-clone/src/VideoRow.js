import React from 'react'
import './VideoRow.css'
function VideoRow({views, subs, descripition, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
             <h3>{title}</h3>
             <p className="videoRow__headline">
                 {channel} . <span className="videoRow__subsNumber">{subs}</span> Subscriber {views} views . {timestamp} 
             </p>
             <p className="videoRow__description">
                 {descripition}
             </p>
            </div>
            
        </div>
    )
}

export default VideoRow

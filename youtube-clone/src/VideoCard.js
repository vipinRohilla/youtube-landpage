import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './VideoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt=""/>
            <h4 className="videoCard__info">
                <Avatar 
                className="videoCard__avatar" 
                alt={channel} 
                src={channelImage}
                />
                <div className="videoCard__text">

                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>

            </h4>
        </div>
    )
}

export default VideoCard

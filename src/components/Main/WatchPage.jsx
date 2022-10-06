import React from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'

export default function WatchPage() {
    return (
        <div>
            <div id="player"></div>
            <YouTubeIframe
                v={"SxQgIJ3rQ3c"}
                playerid="player"
                
            />
        </div>
    )
}

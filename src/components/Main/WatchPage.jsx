import React, { useState } from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'

export default function WatchPage(props) {
    const { v } = props
    const [player, setPlayer] = useState(null)

    return (
        <div>
            <div id="player"></div>
            <YouTubeIframe
                v={v}
                t={0}
                playerid="player"
                player={player}
                setPlayer={pl => setPlayer(pl)}
            />
        </div>
    )
}

import React, { useState } from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'

export default function WatchPage(props) {
    const {  } = props
    const [player, setPlayer] = useState(null)

    return (
        <div>
            <div id="player"></div>
            <YouTubeIframe
                v={"Ga22mpTDS6A"}
                t={0}
                playerid="player"
                player={player}
                setPlayer={pl => setPlayer(pl)}
            />
        </div>
    )
}

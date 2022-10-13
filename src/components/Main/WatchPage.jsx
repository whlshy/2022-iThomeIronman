import React, { useState } from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'
import { Box } from '@mui/material'
import MarkPage from '../../containers/Main/MarkPage'
import { useLocation } from 'react-router-dom'
const queryString = require('query-string')

export default function WatchPage(props) {
    const [player, setPlayer] = useState(null)
    const location = useLocation()
    const { v } = queryString.parse(location.search)

    const getCurrentTime = () => {
        let sec = 0;
        if (!!player)
            sec = player.getCurrentTime()
        return sec;
    }

    const onPlayerReady = (event) => {
        event.target.playVideo()
    }

    const seekTo = (sec) => {
        if (!!player) {
            player.seekTo(sec)
            player.playVideo()
        }
    }

    return (
        <Box sx={{ display: "flex", height: '100%', overflow: "auto" }} >
            <Box sx={{ width: "70%" }} className="watch_wrapper">
                <div className='video_wrapper'>
                    <div className='video_container'>
                        <div id="player" width="100%"></div>
                    </div>
                </div>
                <YouTubeIframe
                    v={v}
                    t={0}
                    playerid="player"
                    player={player}
                    setPlayer={pl => setPlayer(pl)}
                    onPlayerReady={onPlayerReady}
                />
            </Box>
            <Box sx={{ width: "30%", position: "relative" }} className="mark_container">
                <MarkPage v={v} getCurrentTime={getCurrentTime} seekTo={seekTo} />
            </Box>
        </Box>
    )
}

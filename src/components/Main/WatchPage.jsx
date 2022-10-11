import React, { useState } from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'
import { Box } from '@mui/material'
import MarkPage from './MarkPage'
import { useLocation } from 'react-router-dom'
const queryString = require('query-string')

export default function WatchPage(props) {
    const [player, setPlayer] = useState(null)
    const location = useLocation()
    const { v } = queryString.parse(location.search)

    return (
        <Box sx={{ display: "flex", height: '100%', overflow: "auto" }} >
            <Box sx={{ width: "70%" }} className="watch_wrapper">
                <div className='video_wrapper'>
                    <div className='video_container'>
                        <div id="player" width="100%"></div>
                    </div>
                </div>
                <YouTubeIframe
                    v={"Ga22mpTDS6A"}
                    t={0}
                    playerid="player"
                    player={player}
                    setPlayer={pl => setPlayer(pl)}
                />
            </Box>
            <Box sx={{ width: "30%", position: "relative" }} className="mark_container">
                <MarkPage v={v} />
            </Box>
        </Box>
    )
}

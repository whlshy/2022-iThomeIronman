import React, { useState } from 'react'
import YouTubeIframe from '../elements/YouTubeIframe'
import { Box } from '@mui/material'
import MarkView from '../elements/MarkView'

const content = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| --- | --- |
|1|2|
`

export default function WatchPage(props) {
    const { } = props
    const [player, setPlayer] = useState(null)

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
            <Box sx={{ width: "30%" }} className="mark_container">
                <MarkView
                    sec={33}
                    content={content}
                    onDoubleClick={e => "雙擊"}
                />
            </Box>
        </Box>
    )
}

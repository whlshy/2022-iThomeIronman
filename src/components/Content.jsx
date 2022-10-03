import React from 'react'
import { Box } from '@mui/material'
import { Route } from 'react-router-dom'

export default function Main() {
  return (
    <Box sx={{ bgcolor: '#999', flex: "1 1 auto" }}>
      <Route exact path="/">首頁</Route>
      <Route exact path="/watch">影片標記</Route>
    </Box>
  )
}


/*

<VideoCard
  v={"Ga22mpTDS6A"}
  title={"東京版《Joe是要對決》日幣30000元的奢華壽喜燒對決日幣600元的平價壽喜燒！Ep127@徐海莉 Hailey@流川莉蘿 Rilo ch."}
/>
<VideoCard
  v={"SxQgIJ3rQ3c"}
  title={"NEAL對決秋天的王者李宰赫！Royal Roader再度誕生！個人賽決賽SET 2《2022 跑跑卡丁車聯賽 S2》"}
/>

*/
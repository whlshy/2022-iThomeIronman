import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import VideoCard from '../VideoCard'

export default function HomePage(props) {
  const { home, setData, getData } = props
  const { data } = home

  useEffect(() => {
    // 第一次進入HomePage.jsx時去取得資料
    getData()
  }, [])

  // const getData = async () => {
  //   // fetch取得API的資料
  //   const data = await fetch('http://localhost:5000/api/Notes').then(res => res.json())
  //   setData(data)
  // }

  return (
    <Box sx={{ p: 3, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {!!data && data.map(d =>
        <VideoCard
          key={d.v}
          v={d.v}
          title={d.title}
        />
      )}
    </Box>
  )
}
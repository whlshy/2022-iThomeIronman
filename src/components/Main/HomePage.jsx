import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import VideoCard from '../VideoCard'

export default function HomePage(props) {
  const { home, setData } = props
  const { data } = home

  useEffect(() => {
    // 第一次進入HomePage.jsx時去取得資料
    getData()
  }, [])

  const getData = async () => {
    // fetch取得API的資料
    const data = await fetch('http://localhost:5000/api/Notes').then(res => res.json())
    setData(data)
  }

  return (
    <Box sx={{ p: 3, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {/** 用.map的方式把array的資料一個一個渲染出來 */}
      {!!data && data.map(d =>
        <VideoCard
          // key用來幫助React分辨哪些項目被改變、增加或刪除
          key={d.v}
          v={d.v}
          title={d.title}
        />
      )}
    </Box>
  )
}
import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import VideoCard from '../VideoCard'

export default function HomePage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // 第一次進入HomePage.jsx時去取得資料
    getData()
  }, [])

  const getData = () => {
    // 模擬API取得資料
    setData(
      [
        { v: "Ga22mpTDS6A", title: "東京版《Joe是要對決》日幣30000元的奢華壽喜燒對決日幣600元的平價壽喜燒！Ep127@徐海莉 Hailey@流川莉蘿 Rilo ch." },
        { v: "SxQgIJ3rQ3c", title: "NEAL對決秋天的王者李宰赫！Royal Roader再度誕生！個人賽決賽SET 2《2022 跑跑卡丁車聯賽 S2》" },
      ]
    )
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

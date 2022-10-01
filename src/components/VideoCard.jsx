import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function VideoCard(props) {
  const {v, title} = props

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://img.youtube.com/vi/${v}/hqdefault.jpg`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

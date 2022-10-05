import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom' // 導入Link

export default function VideoCard(props) {
  const { v, title } = props

  return (

    <Card sx={{ maxWidth: 480, m: 1 }}>
      <Link className='reset' to={`/watch?v=${v}`}>
        <CardMedia
          component="img"
          // height="360"
          image={`https://img.youtube.com/vi/${v}/hqdefault.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='twoline'>
            {title}
          </Typography>
        </CardContent>
      </Link>

    </Card>

  )
}

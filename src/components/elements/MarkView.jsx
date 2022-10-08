import React from 'react'
import { Button, Box } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkView(props) {
    const { sec, content, onDoubleClick } = props

    return (
        <Box sx={{ p: 1 }}>
            <Button size="small" variant="outlined">{parseInt(sec / 60)}:{(((sec - parseInt(sec / 60) * 60) / 100).toFixed(2)).split('.')[1]}</Button>
            <Box
                sx={{ border: "1px solid #000", p: 1, margin: "5px 0", borderRadius: "10px", backgroundColor: "#fff" }}
                component="div"
                onClick={onDoubleClick}
            >
                <article  onClick={onDoubleClick}>
                    <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
                </article >

            </Box>
        </Box>
    )
}

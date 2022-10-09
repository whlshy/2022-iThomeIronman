import React from 'react'
import { Button, Box } from '@mui/material'
import MDEditor from '@uiw/react-md-editor'

export default function MarkView(props) {
    const { sec, content, onDoubleClick } = props

    return (
        <Box sx={{ p: 1 }}>
            <Button size="small" variant="outlined">{parseInt(sec / 60)}:{(((sec - parseInt(sec / 60) * 60) / 100).toFixed(2)).split('.')[1]}</Button>
            <Box
                sx={{ border: "1px solid #000", p: 1, margin: "5px 0", borderRadius: "10px", backgroundColor: "#fff" }}
                component="div"
            >
                <article onDoubleClick={e => onDoubleClick(e)}>
                    <MDEditor.Markdown source={content} linkTarget="_blank" style={{ padding: 10 }} />
                </article>
            </Box>
        </Box>
    )
}

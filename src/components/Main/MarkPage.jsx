import React, { useState, useEffect, useRef } from 'react'
import MarkView from '../elements/MarkView'
import MDEditor from '@uiw/react-md-editor'
import { Button, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export default function MarkPage(props) {
  const { v, mark, setMark, getCurrentTime, seekTo } = props
  const [isEdit, setEdit] = useState(false)
  const [mdInfo, setMdInfo] = useState({ content: null, id: null, sec: null })

  // 當按下esc離開編輯器
  const handleKeydown = (e) => {
    if (e.keyCode == 27) {
      setEdit(false)
      editMark(v, mdInfo.id, mdInfo.sec, mdInfo.content)
    }
  }

  useEventListener('keydown', handleKeydown)

  useEffect(() => {
    getMark(v)
  }, [v])

  const getMark = async (v) => {
    const data = await fetch(`http://localhost:5000/api/Note/${v}`).then(res => res.json())
    setMark(data)
  }

  const editMark = async (v, id, sec, content) => {
    const data = await fetch(`http://localhost:5000/api/Note/${v}`, {
      body: JSON.stringify({ id, sec, content }),
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    getMark(v)
  }

  const addMark = async (v, sec, content = null) => {
    if (!!v && !!sec) {
      const data = await fetch(`http://localhost:5000/api/Note/${v}`, {
        body: JSON.stringify({ sec, content }),
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(res => res.json())
      getMark(v)
    }
  }

  const delMark = async (v, id) => {
    const data = await fetch(`http://localhost:5000/api/Note/${v}`, {
      body: JSON.stringify({ id }),
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    getMark(v)
  }

  return (
    <>
      {!!isEdit &&
        <MDEditor
          value={mdInfo.content || undefined}
          onChange={value => setMdInfo({ ...mdInfo, content: value })}
          style={{ position: "absolute", zIndex: "1" }}
          height="100%"
          width="100%"
          className='md_editor'
          autoFocus
        />
      }
      {
        !!mark.mark && mark.mark.map((m, idx) =>
          <MarkView
            key={idx}
            sec={m.sec}
            content={m.content}
            onDoubleClick={e => (setEdit(!isEdit), setMdInfo({ content: m.content, id: m.id, sec: m.sec }))}
            handleDel={() => delMark(v, m.id)}
            seekTo={seekTo}
          />
        )
      }
      <Box className="flex jcc" sx={{ p: 1, mt: 1 }}>
        <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={() => addMark(v, getCurrentTime())}>
          新增標記
        </Button>
      </Box>
    </>
  )
}

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
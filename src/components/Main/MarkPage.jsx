import React, { useState, useEffect, useRef } from 'react'
import MarkView from '../elements/MarkView'
import MDEditor from '@uiw/react-md-editor'

export default function MarkPage(props) {
  const { v } = props
  const [isEdit, setEdit] = useState(false)
  const [mdInfo, setMdInfo] = useState({ content: null, id: null, sec: null })
  const [mark, setMark] = useState(null)

  // 當按下esc離開編輯器
  const handleKeydown = (e) => {
    if (e.keyCode == 27) {
      setEdit(false)
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

  return (
    <>
      {!!isEdit &&
        <MDEditor
          value={mdInfo.content}
          onChange={value => setMdInfo({ ...mdInfo, content: value })}
          style={{ position: "absolute", zIndex: "1" }}
          height="100%"
          width="100%"
          className='md_editor'
        />
      }
      {
        !!mark && mark.map((m, idx) =>
          <MarkView
            key={idx}
            sec={m.sec}
            content={m.content}
            onDoubleClick={e => setEdit(!isEdit)}
          />
        )
      }
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
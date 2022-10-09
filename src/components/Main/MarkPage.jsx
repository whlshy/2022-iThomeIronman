import React, { useState, useEffect, useRef } from 'react'
import MarkView from '../elements/MarkView'
import MDEditor from '@uiw/react-md-editor'

export default function MarkPage(props) {

    const [isEdit, setEdit] = useState(false)
    const [mdInfo, setMdInfo] = useState({ content: null, id: null, sec: null })

    const content = ``

    // 當按下esc離開編輯器
    const handleKeydown = (e) => {
        if (e.keyCode == 27) {
            setEdit(false)
        }
    }

    useEventListener('keydown', handleKeydown)

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
            <MarkView
                sec={33}
                content={content}
                onDoubleClick={e => setEdit(!isEdit)}
            />
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


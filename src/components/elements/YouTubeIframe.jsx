import React, { useEffect, Fragment } from 'react'

export default function YouTubeIframe(props) {
  const { v, t, setPlayer, onPlayerReady, onPlayerStateChange, onPlaybackQualityChange, playerid, player } = props

  useEffect(() => {
    loadYTApi()
  }, [])

  // 當影片id變更時，載入新的影片
  useEffect(() => {
    !!player &&
      player.loadVideoById({
        videoId: v,
        startSeconds: parseFloat(0)
      })
  }, [v])

  // 開始時間改變時，跳轉到該時間
  useEffect(() => {

    
  }, [t])

  const loadYTApi = async() => {
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = loadVideo; // onYouTubeIframeAPIReady will load the video after the script is loaded
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else { // If script is already there, load the video directly
      loadVideo();
    }
  }

  const loadVideo = () => { // the Player object is created uniquely based on the id in props
    setPlayer(new window.YT.Player(playerid, {
      videoId: v,
      playerVars: {
        'start': parseFloat(t)
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onPlaybackQualityChange': onPlaybackQualityChange
      },
    }))
  };

  return (
    <Fragment></Fragment>
  )
}

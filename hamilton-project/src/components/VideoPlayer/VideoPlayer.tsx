import React, { useCallback, useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import screenfull from "screenfull"
import videoUrl from "../../assets/images/imgs/video1.mp4"
import {
    FullScreenIcon,
    MuteIcon,
    PauseIcon,
    PlayIcon,
    VolumeIcon,
} from "../../assets/sprites"
import { RangeSeek } from "../Controls/RangeSeek"
import { Volume } from "../Controls/Volume"

import "./videoplayer.scss"

export const VideoPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [speedVideo, setSpeedVideo] = useState<number>(1)
    const [isMuted, setIsMuted] = useState<boolean>(false)
    const [playedSeconds, setPlayedSeconds] = useState<number>(0)
    const [maxTime, setMaxTime] = useState<number>(0)
    const [volume, setVolume] = useState<number>(0.5)

    const refPlayer = useRef<any>()
    const refPlayerContainer = useRef<any>()

    const togglePlay = useCallback(() => {
        setIsPlaying(!isPlaying)
    }, [isPlaying])

    const handleVideoProgress = useCallback((event: any) => {
        const time = Number(event.target.value)
        setPlayedSeconds(time)
        refPlayer.current.seekTo(time)
    }, [])

    const handleVideoSpeed = useCallback((event: any) => {
        setSpeedVideo(Number(event.target.value))
    }, [])

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    const handleProgress = useCallback(
        (e: any) => {
            setPlayedSeconds(e.playedSeconds)
        },
        [playedSeconds]
    )

    const handleVolumeChange = useCallback(
        (e: any) => {
            setVolume(Number(e.target.value))
        },
        [volume]
    )

    const handleDuration = useCallback(
        (e: any) => {
            setMaxTime(e)
        },
        [maxTime]
    )

    const handleFullScreenPlayer = useCallback(() => {
        screenfull.toggle(refPlayerContainer.current)
    }, [])

    return (
        <>
            <div ref={refPlayerContainer} className="video-wrapper">
                <ReactPlayer
                    muted={isMuted}
                    playing={isPlaying}
                    width="100%"
                    height="100%"
                    url={videoUrl}
                    controls={false}
                    ref={refPlayer}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    playbackRate={speedVideo}
                    volume={volume}
                />
                <div className="controls">
                    <RangeSeek
                        max={maxTime}
                        changeCallback={handleVideoProgress}
                        value={playedSeconds}
                    />
                    <div className="controls__line">
                        <div
                            className="controls__play_pause"
                            onClick={togglePlay}
                        >
                            {!isPlaying ? (
                                <div className="play">
                                    {" "}
                                    <PlayIcon />{" "}
                                </div>
                            ) : (
                                <div className="pause">
                                    {" "}
                                    <PauseIcon />{" "}
                                </div>
                            )}
                        </div>
                        <div className="controls__volume">
                            <Volume
                                changeCallback={handleVolumeChange}
                                value={volume}
                            />
                        </div>
                        <select
                            className="velocity"
                            value={speedVideo}
                            onChange={handleVideoSpeed}
                        >
                            <option value="0.50">0.50x</option>
                            <option value="1">1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="2">2x</option>
                        </select>
                        <button className="mute-btn" onClick={toggleMute}>
                            <MuteIcon />
                        </button>
                        <div onClick={handleFullScreenPlayer}>
                            {" "}
                            <FullScreenIcon />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

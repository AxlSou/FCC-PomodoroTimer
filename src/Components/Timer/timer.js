import React, { useEffect } from "react";
import './timer.scss'
import { FaPlay, FaPause } from 'react-icons/fa'
import { GrPowerReset } from 'react-icons/gr'
import { useDispatch, useSelector } from "react-redux";
import { playTimer, play, reset } from "../../features/timerSlice";

const Timer = () => {

    const { timerOn, sessionTime, breakTime } = useSelector((store) => store.timer)

    const dispatch = useDispatch()

    const minSecs = (timer) => {
        let time = timer*1000
        let minutes = Math.floor(time/60/1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        let seconds = Math.floor((time % (60*1000)) / 1000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    
        return `${minutes}:${seconds}`
    }

    useEffect(() => {
        if (timerOn) {
            const interval = setInterval(() => {
                dispatch(playTimer())
            }, 1000);
            return () => clearInterval(interval)
        }
    })

    const timerDisplay = () => {
        if (sessionTime >= 0) {
           return minSecs(sessionTime)
        } else {
           return minSecs(breakTime)
        }
    }

    const sessionBreakDisplay = () => {
        if (sessionTime >= 0) {
            return "Session"
        } else {
            return "Break"
        }
    }

    const playAudio = () => {
        const audio = document.getElementById("beep")
        if (sessionTime === 0 || breakTime === 0) {
            audio.play()
        }
    }

    playAudio()

    const resetTimer = () => {
        const audio = document.getElementById("beep")
        audio.pause()
        audio.currentTime = 0
        dispatch(reset())
    }

    return(
        <div className="timer-container">
            <div className="session-container">
                <h2 id="timer-label">{sessionBreakDisplay()}</h2>
                <div id="time-left">{timerDisplay()}</div>
            </div>
            <div className="btn-container">
                <button id="start_stop" className="btn" onClick={() => dispatch(play())}>
                    <FaPlay />
                    <FaPause />
                </button>
                <button id="reset" className="btn" onClick={resetTimer}>
                    <GrPowerReset className="btn-reset"/>
                </button>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}

export default Timer
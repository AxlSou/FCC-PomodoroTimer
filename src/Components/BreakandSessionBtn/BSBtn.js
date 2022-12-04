import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/timerSlice";
import './BSBtn.scss'

const BreakAndSession = () => {

    const { breakLength, sessionLength } = useSelector((store) => store.timer)

    const dispatch = useDispatch()

    return (
        <div className="bs-container">
            <div className="break-box">
                <h2 id="break-label">Break Length</h2>
                <div className="change-break">
                    <button id="break-decrement" onClick={() => dispatch(decrement('break'))}>
                        <FaArrowDown />
                    </button>
                    <h3 id="break-length">{breakLength}</h3>
                    <button id="break-increment" onClick={() => dispatch(increment('break'))}>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
            <div className="break-box">
                <h2 id="session-label">Session Length</h2>
                <div className="change-break">
                    <button id="session-decrement" onClick={() => dispatch(decrement('session'))}>
                        <FaArrowDown />
                    </button>
                    <h3 id="session-length">{sessionLength}</h3>
                    <button id="session-increment" onClick={() => dispatch(increment('session'))}>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BreakAndSession
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    sessionTime: 1500,
    breakTime: 300,
    timerOn: false
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        increment: (state, action) => {
            if (action.payload === 'break' && state.breakLength < 60 && !state.timerOn) {
                state.breakLength += 1
                state.breakTime += 60
            } else if (action.payload === 'session' && state.sessionLength < 60 && !state.timerOn) {
                state.sessionLength += 1
                state.sessionTime += 60
            };
        },
        decrement: (state, action) => {
            if (action.payload === 'break' && state.breakLength > 1 && !state.timerOn) {
                state.breakLength -= 1
                state.breakTime -= 60
            } else if (action.payload === 'session' && state.sessionLength > 1 && !state.timerOn) {
                state.sessionLength -= 1
                state.sessionTime -= 60
            };
        },
        play: (state) => {
            state.timerOn = !state.timerOn
        },
        playTimer: (state) => {
            if (state.sessionTime >= 0) {
                state.sessionTime -= 1
            } else if (state.breakTime >= 0) {
                state.breakTime -= 1
                if (state.breakTime < 0) {
                    state.sessionTime = state.sessionLength * 60
                }
            }
        },
        reset: () => initialState
    }
})

export const { increment, decrement, playTimer, play, reset } = timerSlice.actions

export default timerSlice.reducer
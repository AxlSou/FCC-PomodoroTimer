import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timerSlice";

export default configureStore({
    reducer: {
        timer: timerReducer
    }
})

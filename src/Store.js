import { configureStore } from "@reduxjs/toolkit"
import videoReducer from './features/video/videSlice'
import optionReducer from './features/options/optionSlice'
const Store = configureStore({
    reducer: {
        video: videoReducer,
        option: optionReducer
    }
})

export default Store
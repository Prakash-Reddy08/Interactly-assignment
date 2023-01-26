import { createSlice } from "@reduxjs/toolkit"
import VideoMain from '../../assets/video Main.mp4'
import campaignStructure from '../../assets/Campaign structure.mp4'
import webinar from '../../assets/webinar.mp4'

const initialState = {
    video: VideoMain,
    h1Text: "Welcome"
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVideo: (state, action) => {
            switch (action.payload) {
                case "A":
                    state.video = campaignStructure
                    state.h1Text = "Funnel 2: freebi or coaching"
                    break;
                case "B":
                    state.video = webinar
                    state.h1Text = "Funnel 3: webinar sign up"
                    break;
                case "C":
                    state.video = campaignStructure
                    state.h1Text = "Funnel 2: freebi or coaching"
                    break;
                default:
                    break;
            }
        }
    },
})

export const { setVideo } = videoSlice.actions

export default videoSlice.reducer
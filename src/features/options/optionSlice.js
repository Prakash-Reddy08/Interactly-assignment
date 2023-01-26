import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    option: ""
}

const optionSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setOption: (state, action) => {
            state.option = action.payload
        }
    },
})

export const { setOption } = optionSlice.actions

export default optionSlice.reducer
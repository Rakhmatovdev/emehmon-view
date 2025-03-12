import { createSlice } from '@reduxjs/toolkit'
import {RootState} from "../store/store.ts";

interface darState {
    mode: 'dark' | 'light',
    lock: boolean,
    support: boolean,
}
const initialState: darState = {
    mode: localStorage.theme ?? "dark",
    lock:false,
    support:false,
}

const darkSlice = createSlice({
    name: 'mode-dark',
    initialState,
    reducers: {
        toggle: (state) => {
            state.mode = state.mode == 'dark' ? 'light':'dark'
        },
        lockToggle: (state) => {
            state.lock = !state.lock
        },
        supportToggle: (state) => {
            state.support = !state.support
        }
    },
})

export const {toggle,lockToggle,supportToggle } = darkSlice.actions

export const selectToggle = (state: RootState) => state.mode.mode

export default darkSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from "../counter/counterSlice.ts";
import darkSlice from "../mode/darkSlice.ts";
// ...

export const store = configureStore({
    reducer: {
        counter:CounterSlice,
        mode:darkSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
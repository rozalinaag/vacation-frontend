import { configureStore } from "@reduxjs/toolkit";
import {vacationReducer} from "./slices/vacation";
import {authReducer} from "./slices/auth";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        vacation: vacationReducer,
        auth: authReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
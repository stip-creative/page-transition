import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface IMainState {
    someState: number | null;
}

const initialState: IMainState = {
    someState: null,
};

export const cloudsSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setSomeStatex: (state, action: PayloadAction<number | null>) => {
            state.someState = action.payload;
        },
    }
});

export const {
    setSomeStatex
} = cloudsSlice.actions;

export const getSomeStatex = (state: RootState): number | null => state.main.someState;

export default cloudsSlice.reducer;

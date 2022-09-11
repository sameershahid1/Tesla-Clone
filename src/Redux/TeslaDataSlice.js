import { createSlice } from "@reduxjs/toolkit";


const TeslaDataSlice=createSlice({
    name:"teslaData",
    initialState:{Data:null},
    reducers:{
        Storing(state,action)
        {
            state.Data=action.payload.Data;
        }
    }
});

export const TeslaDataActions=TeslaDataSlice.actions;


export default TeslaDataSlice;

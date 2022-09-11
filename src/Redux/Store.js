import {configureStore} from '@reduxjs/toolkit'
import TeslaDataSlice from './TeslaDataSlice'


const store=configureStore({
    reducer:{
        TeslaData:TeslaDataSlice.reducer
    }
});


export default store;
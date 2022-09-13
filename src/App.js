import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { useDispatch } from 'react-redux';
import {TeslaDataActions} from './Redux/TeslaDataSlice';
import Data from './Data/carInfo.json';


const App = () => {
const Dispatch=useDispatch();
Dispatch(TeslaDataActions.Storing({Data}));

return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App

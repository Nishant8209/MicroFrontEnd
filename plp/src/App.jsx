import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import PlpContainer from './PlpContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
 const parentCallBack=(result)=>{
    console.log('product',result);
 }
  return (
    <>
    <BrowserRouter>
    <PlpContainer titel={'Products'} callback={parentCallBack}></PlpContainer>
    </BrowserRouter>
    
     
    </>
  )
}

export default App

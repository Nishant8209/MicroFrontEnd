import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from './Layout';  // Import the Layout component
import PlpContainer from "../../plp/src/PlpContainer";
import PdpContent from "../../pdp/src/PdpContent";
import Test from "./components/Test";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const parentCallBack = (result) => {
    const cart = [...cartItem, result];
    setCartItem(cart);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout cartItem={cartItem}/>}>
            <Route path="" element={<PlpContainer titel={'Products List'} callback={parentCallBack} />} />
            <Route path="/product/:id" element={<PdpContent />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Header from "../../Home/src/Header";
import Footer from "../../Home/src/Footer";
import { Outlet } from "react-router-dom";
function Layout(props) {
  return (
    <div>
      <Header cartItem={props.cartItem}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Layout;

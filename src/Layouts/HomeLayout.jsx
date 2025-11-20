import React from "react";
import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;

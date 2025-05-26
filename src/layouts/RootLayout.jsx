import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <section className="container mx-auto">
        <NavBar></NavBar>
      </section>
      <main className="container mx-auto">
        <Outlet></Outlet>
      </main>
      <section className="container mx-auto">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default RootLayout;

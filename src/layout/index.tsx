import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;

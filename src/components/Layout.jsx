import React from "react";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderNav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

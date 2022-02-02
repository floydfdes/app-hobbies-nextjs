import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar currentUser={props.user} />
      {props.children}
    </div>
  );
};

export default Layout;

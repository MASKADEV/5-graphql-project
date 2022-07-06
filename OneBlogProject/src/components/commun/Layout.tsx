import React from "react";
import { Header } from "../";

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

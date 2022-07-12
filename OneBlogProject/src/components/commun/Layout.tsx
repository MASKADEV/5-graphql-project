import Head from "next/head";
import React from "react";
import { Header } from "../";

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MASKA BLOG</title>
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

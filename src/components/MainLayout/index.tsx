import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    <main className="relative p-14">{children}</main>
    <Footer />
  </>
);

export default MainLayout;

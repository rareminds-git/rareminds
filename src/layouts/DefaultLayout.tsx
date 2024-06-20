import React, { useState } from "react";
import FooterBar from "@/components/Footer/FooterBar";
import Header from "@/components/Header/Index";
import Menu from "@/components/Menu/Index";
import { useLocation } from "react-router-dom";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  return location.pathname !== "/" ? (
    <div>
      <div className="App w-full h-full">
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      </div>
      {children}
      <FooterBar />
    </div>
  ) : (
    <div className="App">{children}</div>
  );
};

export default DefaultLayout;

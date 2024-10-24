import React, { useState } from "react";
import FooterBar from "@/components/Footer/FooterBar";
import Header from "@/components/Header/Index";
import Menu from "@/components/Menu/Index";
import { useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  return location.pathname !== "/" ? (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="App w-full h-full xl:pt-24 lg:pt-20 md:pt-16 pt-12">
        {children}
      </div>
      <FooterBar />

      {/* <CookieConsent
        location="bottom"
        buttonText="I understand."
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        enableDeclineButton
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
    </div>
  ) : (
    <div className="App">{children}</div>
  );
};

export default DefaultLayout;

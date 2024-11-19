import "@/assets/css/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./common/ScrollToTop";
import store from "./redux/store";

ReactGA.initialize("G-2C3NWT59R8");

ReactGA.send({
  hintType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/">
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

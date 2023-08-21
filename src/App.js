import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import Gallery from "./pages/Gallery";
import { path } from "./api";
import { motion } from "framer-motion";
import { photoAnim } from "./animation";
import chatIcon from "./img/messenger.png"
import { Link } from "react-router-dom";

//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path={`${path}`} exact>
            <AboutUs />
          </Route>
          <Route path={`${path}work`} exact>
            <OurWork />
          </Route>
          <Route path={`${path}gallery`}>
            <Gallery />
          </Route>
          <Route path={`${path}contact`}>
            <ContactUs />
          </Route>

        </Switch>
      </AnimatePresence>
      <Link  to={`${path}contact`} className="chat_guy" >
        <motion.img
          className="prev_arrow"
          variants={photoAnim}
          src={chatIcon}
          alt="back-arrow"
        />
      </Link>
    </div>
  );
}

export default App;

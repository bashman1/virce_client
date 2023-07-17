import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
import { path } from "./api";

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
          <Route path="/tambisa/" exact>
            <AboutUs />
          </Route>
          <Route path="/tambisa/work" exact>
            <OurWork />
          </Route>
          <Route path="/tambisa/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/tambisa/contact">
            <ContactUs />
          </Route>

        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

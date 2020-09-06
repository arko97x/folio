import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import Hi from "hi.js";

import About from "pages/about.js";
import Home from "pages/home.js";
import InFlo from "pages/inflo.js";
import ChehakChirps from "pages/chehakchirps.js";
import WhatsappLists from "pages/whatsapp-lists.js";
import VisualDesigns from "pages/visual-designs.js";
import PortfolioRedesign from "pages/portfolio-redesign.js";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/folio/:name">
          <ComponentRenderer />
        </Route>
        <Route exact path="/folio">
          <Hi />
        </Route>
        <Route exact path="/folio/home">
          <Home />
        </Route>
        <Route exact path="/folio/about">
          <About />
        </Route>
        <Route exact path="/folio/inflo">
          <InFlo />
        </Route>
        <Route exact path="/folio/chehakchirps">
          <ChehakChirps />
        </Route>
        <Route exact path="/folio/portfolio_redesign">
          <PortfolioRedesign />
        </Route>
        <Route exact path="/folio/whatsapp_lists">
          <WhatsappLists />
        </Route>
        <Route exact path="/folio/visual_designs">
          <VisualDesigns />
        </Route>
      </Switch>
    </Router>
  );
}

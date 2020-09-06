import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import Hi from "hi.js";
import Home from "pages/home.js";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

export default function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/:name" render={() => <ComponentRenderer />}>
        </Route>
        <Route exact path="/" render={() => <Hi />}>
        </Route>
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

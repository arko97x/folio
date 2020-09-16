import React from 'react';
import { useParams } from 'react-router-dom';

import about from "pages/about.js";
import home from "pages/home.js";
import inflo from "pages/inflo.js";
import chehakchirps from "pages/chehakchirps.js";
import whatsapp_lists from "pages/whatsapp-lists.js";
import visual_designs from "pages/visual-designs.js";
import portfolio_redesign from "pages/portfolio-redesign.js";
import ingenius from "pages/ingenius.js";
import tedx from "pages/tedx.js"

export const i = {
  about: {
    component: about,
  },
  home: {
    component: home,
  },
  inflo: {
    component: inflo,
  },
  chehakchirps: {
    component: chehakchirps,
  },
  ingenius: {
    component: ingenius,
  },
  tedx: {
    component: tedx,
  },
  whatsapp_lists: {
    component: whatsapp_lists,
  },
  visual_designs: {
    component: visual_designs,
  },
  portfolio_redesign: {
    component: portfolio_redesign,
  }
}

export default () => {
  const { name } = useParams()

  try {
    let Component = null;
    Component = i[name].component

    if (Component) {
      return <Component />
    }

    throw new Error("Component Not Found")
  }
  catch (e) {
    return <div>Error: Component Not Found</div>
  }
}

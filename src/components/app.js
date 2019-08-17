import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { routes, SideBar } from "./";

export const App = () => {
  const props = useSelector(state => {
    return state.commonState;
  });

  return (
    <Router>
      <div>
      {!props.progress ? null : (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        )}
        <SideBar />       
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </Router>
  );
};

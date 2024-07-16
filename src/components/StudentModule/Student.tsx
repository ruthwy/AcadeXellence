import React from "react";
import "../../global-styles.less";
import Header from "../Header";
import { routes } from "../../constants";
import { Outlet } from "react-router-dom";


function Student() {
  return (
    <div className="global-styles-ui">
      <div className="head">
        <Header links={[routes.logout]} />
        <hr />
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Student;

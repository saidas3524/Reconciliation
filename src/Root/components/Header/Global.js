import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// import logo from "../../Images/microsoft_color.svg";
import microsoftImg from "../../../Images/microsoft-logo.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';

import UserDropDown from "./UserDropDown";
import { RootLocalStringConstants } from "../../constants/RootLocalStringConstants";
class GlobalNavigation extends PureComponent {

  render() {
    const { localStrings } = this.props;
    return (

      <header>
        <div className="container header-wrapper">
          <a href="../" className="navbar-brand microsoft mr-0">
            <img src={microsoftImg} alt="Microsoft OEM DOC" />
          </a>
          <Link to={"/"} className="navbar-brand oem-doc m-auto m-lg-0" href="/">
            {localStrings.PORTAL_TITLE}
          </Link>

        </div>
      </header>
    );
  }
}

export default LocalizationProvider(RootLocalStringConstants.NAVIGATION, GlobalNavigation);







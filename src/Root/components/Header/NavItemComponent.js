import React from 'react';

import {

    NavItem,
    NavLink,

} from "reactstrap";
import { Link } from 'react-router-dom';

const NavItemComponent = ({ buttonText, href }) => {

    return (
        <NavItem >
            <NavLink className="active" tag={Link} to={href}>
                {buttonText}
            </NavLink>
        </NavItem>
    );
};

export default NavItemComponent;


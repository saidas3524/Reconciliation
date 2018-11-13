import React, { Component } from 'react';

import Img from '../../Images/DAAS2.jpg'
import { LocalizationProvider } from '../../../node_modules/@ec-oem/ec.oem.oa3.mux.core/components';
import { RootLocalStringConstants } from '../constants/RootLocalStringConstants';


 class LandingPage extends Component {
    render() {
        const {localStrings} = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                <img className="img-fluid" src={Img} alt="Landing Image" />

                </div>
                <div className="dashboard-banner jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="banner-caption">
                            <h1>{localStrings.WELCOME_PAGE_TITLE}</h1>
                            <p>{localStrings.WELCOME_PAGE_MESSAGE}</p>
                            <div className=" mt-3 justify-content-between d-flex"> <a className="btn btn-secondary d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right" href="mailto:msoemops@microsoft.com" role="button">
                                <span>{localStrings.WELCOME_REGISTER_LINK}</span>
                            </a>
                                <a className="btn btn-secondary d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right" href="mailto:msoemops@microsoft.com" role="button">
                                    <span>{localStrings.WELCOME_LOGIN_LINK}</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div></React.Fragment>
        )
    }
}

export default LocalizationProvider(RootLocalStringConstants.HOME,LandingPage);
import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router'

import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';
import bannerImg from '../../../images/banner-image.jpg';
import { RootLocalStringConstants } from '../../constants/RootLocalStringConstants';


class WelcomePage extends PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        const { localStrings } = this.props;



        return (
            <Fragment>
                <div className="dashboard-banner jumbotron jumbotron-fluid">
                    <img className="banner-image" src={bannerImg} alt="Banner Image" />
                    <div className="container">
                        <div className="banner-caption">
                            <h1>{localStrings.WELCOME_PAGE_TITLE}</h1>
                            <p>{localStrings.WELCOME_PAGE_MESSAGE}</p>
                            <div className=" mt-3 justify-content-between d-flex"> <a className="btn btn-secondary d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right" href="mailto:msoemops@microsoft.com" role="button">
                                <span>{localStrings.WELCOME_CONTACT_US}</span>
                            </a>
                            </div>

                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}


export default withRouter(LocalizationProvider(RootLocalStringConstants.HOME, WelcomePage));


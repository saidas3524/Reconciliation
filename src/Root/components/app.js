import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import WelcomePage from './Welcome/WelcomePage';
import Spinner from "./common/Spinner";
import { connect } from 'react-redux';


import {
    CoreSelectors
} from '@ec-oem/ec.oem.oa3.mux.core'



import { initializeApp } from '../actions'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Footer from './Footer/Footer';
import { AlertsFeature } from '@ec-oem/ec.oem.oa3.mux.core/Constants';
import { FeatureAlerts } from "@ec-oem/ec.oem.oa3.mux.core/components";
import NotFound from './InfoPages/NotFound';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            headerRef: "",
            footerRef: ""
        }

    }
    setHeaderRef = (ref) => {
        this.setState({
            headerRef: ref
        })

    }

    setFooterRef = (ref) => {
        this.setState({
            footerRef: ref
        })
    }


    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        const { app_ready } = this.props;
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    {app_ready &&
                        <Fragment>
                            <Header setHeaderRef={this.setHeaderRef} footerRef={this.state.footerRef} />

                            <FeatureAlerts timeOut={5000} feature={AlertsFeature.GLOBAL_ALERTS} />
                            <Spinner />
                            <Switch>
                                <Route exact path="/" component={WelcomePage} />


                                <Route exact path="/Not Found" component={NotFound} />

                                <Redirect to="/NotFound" />
                            </Switch>
                            <Footer setFooterRef={this.setFooterRef} headerRef={this.state.headerRef} />
                        </Fragment>}

                </div>
            </Router>
        );
    }
}




const mapStateToProps = (state) => {
    return { app_ready: CoreSelectors.localizationLoaded(state) }
};
const mapDispatchToProps = (dispatch) => ({
    initializeApp() {
        dispatch(initializeApp());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
import { take, call, put, apply } from "redux-saga/effects";
//import fetch from "isomorphic-fetch";
import { fromJS } from 'immutable';
//import MSAL_Wrapper from "../api/msal_wrapper"
import { SET_ACCESS_TOKEN, UPDATE_PLATFORM_PROGRAM, setNavigationMenu, setCurrentUser, setAuthorizedRouteStatus, AuthorizedRoutesStatus, setAuthorizedRoutes, GET_NAVIGATION_MENU } from '../actions';
import { InvokeUrl, InvokeCachedUrl } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { AlertsTypes } from '@ec-oem/ec.oem.oa3.mux.core/Constants';
import { alertAddAction } from '@ec-oem/ec.oem.oa3.mux.core/actions';


export function* navigationMenuSaga() {
    while (true) {
        try {
            yield take(GET_NAVIGATION_MENU);
            let navigationMenu = [
                {
                    buttonText: "Upload File",
                    href: "/Reconciliation/MyDevices"
                },
                {
                    buttonText: "Reconciliation Report",
                    href: "/Reconciliation/PlaceRequests"
                }, {
                    buttonText: "User Management",
                    href: "/"
                }
            ]
            yield put(setNavigationMenu(navigationMenu));
        } catch (error) {
            console.log("navigationMenuSaga " + error);
            yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Internal Error Occurred, Failed to fetch platform program details."] }));

        }
    }
}
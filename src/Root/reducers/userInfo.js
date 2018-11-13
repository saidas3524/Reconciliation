import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS } from 'immutable'
import {
    SET_USER
} from '../actions'
import { SET_ALL_USERS } from '../actions/setUserInfo';
export const userInfo = createReducer(null, {
    [SET_USER](state,{userInfo}) {
        return fromJS(userInfo);
    }
});

export const usersInfo = createReducer(null, {
    [SET_ALL_USERS](state,{users}) {
        return fromJS(users);
    }
});
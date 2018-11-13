import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';



export const SET_USER = "SET_USER";
export const setUser = makeActionCreator(SET_USER,"userInfo");

export const GET_ALL_USERS = "GET_ALL_USERS";
export const getAllUsers = makeActionCreator(GET_ALL_USERS);


export const SET_ALL_USERS = "SET_ALL_USERS";
export const setAllUsers = makeActionCreator(SET_ALL_USERS,"users");

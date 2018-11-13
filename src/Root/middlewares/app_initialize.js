import { APP_INIT,getUserInfo, getNavigationMenu } from "../actions";


import { setLanguagesAndLocalization } from "../actions";
import { getAllUsers } from "../actions/setUserInfo";


const app_initialize = ({dispatch}) => next => action =>{

    if(action.type !== APP_INIT){
       return  next(action);
    }
    dispatch(setLanguagesAndLocalization());
    dispatch(getNavigationMenu());
    dispatch(getAllUsers());

}

export default app_initialize;
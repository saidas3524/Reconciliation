import { createSelector } from 'reselect'
export const allUsersSelector = createSelector(
   state=>state.app.get("usersInfo"),
   usersInfo=>usersInfo
)

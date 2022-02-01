import { SET_LOGIN_STATUS, LOGIN, LOGOUT, UPDATE_DETAILS,LOCATIONOFFILE,LOAD_AD } from "./types/user-actions"
'./types/user-actions'

// import {
//     AdMobInterstitial,
// } from 'react-native-admob';


export const setLoginStatus = (status) => {
    return {
        type: SET_LOGIN_STATUS,
        payload: status
    }
}

export const loginUser = (user) => {
    return {
        type: LOGIN,
        payload: {           
            pass: user.password,
            email: user.email
        }
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}


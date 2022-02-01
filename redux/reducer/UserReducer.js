import { LOGIN, LOGOUT, SET_LOGIN_STATUS, UPDATE_DETAILS,LOCATIONOFFILE,LOAD_AD } from '../actions/types/user-actions'

const initialState = {
  
    email: '',
    pass: '',
   
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,            
                email: action.payload.email,
                pass: action.payload.pass
            };

        case LOGOUT:
            return initialState;

       
        case SET_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            }
      

        default:
            return state;
    }
};

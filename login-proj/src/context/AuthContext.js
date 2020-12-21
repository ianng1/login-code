import {AsyncStorage} from 'react-native'
import Api from '../api/api';
import createDataContext from './createDataContext'
import {navigate} from '../navigationRef'



const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage:'', token: action.payload}; 
        case 'signin':
            return {errorMessage:'', token: action.payload}; 
        case 'clear_error_message':
            return{...state, errorMessage: ""};
        case 'signout':
            return {token:null, errorMessage: ""};
        default:
            return state;
    }

};


const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')

    if (token) {
        dispatch ({type:'signin', payload: token})
        navigate('Main')
    }
    else {
        navigate('Signup')
    }
} 


const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}


const signup = (dispatch) => {
    return async ({email, username, password, confirmPassword}) => {
        try {
            const response = await Api.post("/signup", {email, username, password, confirmPassword})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'signup', payload:response.data.token})
            navigate('Main')
``
        }
        catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong, please try again'})
        }
    }
}
 
const signin = (dispatch) => {
    return async({email, password}) => {
        try {
            const response = await Api.post("/signin", {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type:'signin', payload:response.data.token})
            navigate('Main')
``
        }
        catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with signin'})
        }        
    }
}
 
const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
    navigate('loginFlow');
}
 


export const {Provider, Context} = createDataContext(authReducer, {signin, signout, signup, clearErrorMessage, tryLocalSignin}, {token: null, errorMessage: ''})
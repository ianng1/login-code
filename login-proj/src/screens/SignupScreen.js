import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext"
import AuthFormWithUsername from '../components/AuthFormWithUsername';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation'

console.log("here3")
const SignupScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);




    return (
    <View style={styles.container}>
        <NavigationEvents 
            onWillBlur={clearErrorMessage}
        />
        <AuthFormWithUsername
            headerText="Sign Up"
            errorMessage={state.errorMessage}
            btnText="Sign Up"
            onSubmit={signup}
        
        />
        <NavLink
            navigation={navigation}
            routeName="Signin"
            text="Already have an account? Sign in here"
        />

        
    </View>
    )
}


SignupScreen.navigationOptions = () => {
    return {
        headerShown:false,
    };

}


const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 0,

    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop:15,
    },


})

export default SignupScreen;
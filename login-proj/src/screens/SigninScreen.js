import React, {useContext} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import AuthFormWithoutUsername from '../components/AuthFormWithoutUsername'
import NavLink from '../components/NavLink'
import {Context} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'

const SigninScreen = ({navigation}) => {


    const {state, signin, clearErrorMessage} = useContext(Context);


    return (
        <View style={styles.container}>
            <NavigationEvents 

                onWillBlur={clearErrorMessage}
            />
            <AuthFormWithoutUsername
                headerText="Sign into your account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                btnText="Sign in"
            
            />
            <NavLink 
                navigation={navigation}
                text="Don't have an account? Sign up here"
                routeName = "Signup"
            />
        </View>
    )

}

SigninScreen.navigationOptions = () => {
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


export default SigninScreen;
import React, {useContext} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import AuthFormUsername from '../components/AuthFormWithUsername';
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'




const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return (
    <>
        <Text>AccountScreen</Text>
        <Spacer>
            <Button title="Sign out" onPress={signout}/>
        </Spacer>
    </>)
}

const styles = StyleSheet.create({})

export default AccountScreen;
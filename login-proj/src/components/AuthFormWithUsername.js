import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from './Spacer';



const AuthFormWithUsername = ({headerText, errorMessage, onSubmit, btnText}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
    <>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>

        <Input label="Email" value={email} onChangeText = {setEmail} autoCapitalize='none' autoCorrect={false}/>

        <Spacer>
            <Input label="Username" value={username} onChangeText = {setUsername} autoCapitalize='none' autoCorrect={false}></Input>
        </Spacer>


            <Input secureTextEntry label="Password" value={password} onChangeText = {setPassword} autoCapitalize='none' autoCorrect={false}/>

        <Spacer>
            <Input label="Confirm Password" value={confirmPassword} onChangeText = {setConfirmPassword} autoCapitalize='none' autoCorrect={false}></Input>
        </Spacer>


        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Spacer>
        <Button title={btnText} onPress = {() => onSubmit({email,username, password, confirmPassword})}/>
        </Spacer>
    </>
    )
}




const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop:15,
    },


})

export default AuthFormWithUsername




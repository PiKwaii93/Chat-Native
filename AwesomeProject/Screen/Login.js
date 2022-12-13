import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Platform, StatusBar, Button, TextInput, Pressable } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../Context/UserContext';
import useGetJWT from '../Hook/useGetJWT';


export default function LoginScreen( {navigation} ) {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const getJWT = useGetJWT()

    const handleSubmit = (e) => {
        e.preventDefault();
        var wouf = getJWT(username, password)
        console.log(wouf)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loggin Screen</Text>
            <Text>Le Logged : {loggedUser}</Text>
            <Text>Le username : {username}</Text>
            <Text>Le password : {password}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <TextInput
                style={styles.input}
                label="Username"
                value={username}
                onChangeText={onChangeUsername}
            />
            <TextInput
                style={styles.input}
                label="Password"
                value={password}
                onChangeText={onChangePassword}
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
                <Text>Se connecter</Text>
            </Pressable>
        </View>
      );

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
  });
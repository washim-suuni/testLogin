import React, { Component, useState } from "react";
import { Platform, StyleSheet, UIManager, Text,Image, View,Dimensions, SafeAreaView, TouchableHighlight, ActivityIndicator, TextInput, TouchableOpacity, LayoutAnimation, Alert } from "react-native";

import auth, { firebase } from "@react-native-firebase/auth";
import styles from "../Component/styles";

const blue = "#ff0000";
const {
    height,
    width
} = Dimensions.get('window');
import { useDispatch } from 'react-redux'
import { setLoginStatus, loginUser } from '../redux/actions'
import LinearGradient from "react-native-linear-gradient";


const SignUpComponent = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);

    const __isValidEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const __doSignUp = () => {
        
        if (!email) {
            setError("Email required *");
            setValid(false);
            return;
        } else if (!password && password.trim() && password.length > 6) {
            setError("Weak password, minimum 5 chars");
            setValid(false);
            return;
        } else if (!__isValidEmail(email)) {
            setError("Invalid Email");
            setValid(false);
            return;
        }

        __doCreateUser(email, password);
    };

    const __doCreateUser = async (email, password) => {
        try {
            setFetching(true)
            let response = await auth().createUserWithEmailAndPassword(email, password);
            if (response && response.user) {

                Alert.alert("Success ✅", "Account created successfully");
                setFetching(false)
                let user = {
                    email, password
                }
                dispatch(loginUser(user))
            }
        } catch (e) {
            setFetching(false)
            alert(e.message)
            console.error(e.message);
        }
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'space-evenly',
            backgroundColor: '#fff'
        }}>
            <LinearGradient colors={['#403B4A','#E7E9BB']} style={{ height: 200,opacity:0.5, width: 200, borderRadius: 100, backgroundColor: 'blue',top:-50,left:-10,position:"absolute" }} />
            <LinearGradient colors={['#403B4A', '#E7E9BB']} style={{ height: 40, opacity: 0.5, width: 40, borderRadius: 25, backgroundColor: 'blue', top: 200, right: 50, position: "absolute" }} />
            <LinearGradient colors={['#8E2DE2', '#4A00E0']} style={{ height: 100, opacity: 0.2, width: 100, borderRadius: 100, backgroundColor: 'blue', top: -5, right: -10, position: "absolute" }} />


            <View style={{ flex: 0.2 }}>{!!fetching && <ActivityIndicator color={blue} />}</View>
            <View style={styles.headerContainerStyle}>
                <Image source={require('../assets/image.png')} style={{
                    height: width / 2, width: width,
                }} />
            </View>
            <View style={styles.formContainerStyle}>
                <Text style={{ color: '#6e50d2', fontFamily: 'Poppins-Bold', fontSize: 25 }}>Welcome back,</Text>

                {error ? (
                    <View style={styles.errorLabelContainerStyle}>
                        <Text style={styles.errorTextStyle}>{error}</Text>
                    </View>
                ) : null}
                <TextInput
                    label={"Email"}
                    // autoCapitalize={false}
                    keyboardType="email-address"
                    style={styles.textInputStyle}
                    placeholder="Mail address"
                    onChangeText={text => {
                        setError;
                        setEmail(text);
                    }}
                    error={isValid}
                />

                <TextInput label={"Password"} secureTextEntry style={styles.textInputStyle} selectionColor={blue} placeholder="Password" error={isValid} onChangeText={text => setPassword(text)} />
                <View style={styles.signInButtonContainerStyle}>
                    <TouchableHighlight style={styles.signUpButtonStyle} onPress={__doSignUp} underlayColor={blue}>
                        <View
                        >
                            <Text style={styles.signInButtonTextStyle}>Sign Up</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            
            
        </SafeAreaView>
    );
};


export default SignUpComponent
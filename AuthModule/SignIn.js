import React, { Component, useState } from "react";
import { Platform, StyleSheet, UIManager, Text,Dimensions, View,Image, SafeAreaView, TouchableHighlight, ActivityIndicator, TextInput, TouchableOpacity, LayoutAnimation, Alert } from "react-native";

import auth, { firebase } from "@react-native-firebase/auth";
import styles from "../Component/styles";
const {
    height,
    width
} = Dimensions.get('window');
import LinearGradient from "react-native-linear-gradient";

const blue = "#ff0000";


import { useDispatch } from 'react-redux'
import { setLoginStatus, loginUser } from '../redux/actions'

const SignInComponent = ({navigation}) => {
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

    const __doLogin = () => {
        console.log('hello there');
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
        let signInRequestData = {
            email,
            password
        };

        __doSingIn(email, password);
    };

    const __doSingIn = async (email, password) => {
        try {
            setFetching(true)
            let response = await auth().signInWithEmailAndPassword(email, password);
            if (response && response.user) {
                console.log('response.user', response.user);
                let user = {
                    email, password
                }
                dispatch(loginUser(user))
                Alert.alert("Success ✅", "Logged successfully");

                setFetching(false)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            }
        } catch (e) {
            setFetching(false)
            alert(e.message)
            console.error(e.message);
        }
    };

    return (
        <SafeAreaView style={styles.containerStyle}>
            <LinearGradient colors={['#e10030', '#f5af19','#e10030']} style={{ height: 200, opacity: 1, width: 200, borderRadius: 100, backgroundColor: 'blue', top: -100, right: -50, position: "absolute" }} />
            <LinearGradient colors={['#FC466B', '#E7E9BB']} style={{ height: 40, opacity: 0.5, width: 40, borderRadius: 25, backgroundColor: 'blue', top: 200, left: -5, position: "absolute" }} />
            <LinearGradient colors={['#1a2a6c', '#b21f1f']} style={{ height: 100, opacity: 0.2, width: 100, borderRadius: 100, backgroundColor: 'blue', top: height/2.3, right: -50, position: "absolute" }} />
            <View style={{ flex: 0.1 }}>{!!fetching && <ActivityIndicator color={blue} />}</View>
            <View style={styles.headerContainerStyle}>
                <Image source={require('../assets/seg1.png')} style={{
                    height: width/2, width: width,
                }} />
            </View>
            <View style={styles.formContainerStyle}>
                <Text style={{ color: '#e10030', fontFamily: 'Poppins-Bold', fontSize: 25 }}>hey Welcome,</Text>

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
                    placeholder="Email"
                    onChangeText={text => {
                        // let isValid = this.state.isValid;
                        // isValid["email"] = !this.__isValidEmail(text);
                        setValid(__isValidEmail(text));
                        setEmail(text);
                    }}
                    error={isValid}
                />
                <TextInput label={"Password"} secureTextEntry  style={styles.textInputStyle} selectionColor={blue} placeholder="Password" error={isValid} onChangeText={text => setPassword(text)} />
                <View style={styles.signInButtonContainerStyle}>
                    <TouchableHighlight style={styles.signInButtonStyle} onPress={__doLogin} underlayColor={blue}>
                        <View>
                            <Text style={styles.signInButtonTextStyle}>Sign in</Text>
                        </View>
                    </TouchableHighlight></View>
            </View>
            
            

           
            <TouchableHighlight onPress={() => navigation.navigate('SignUp')} style={{ alignSelf: 'center', bottom: 5 }}>
                <Text style={styles.Createtext}>
                    Don't have account <Text style={{ color:'#e10030',fontFamily:'Poppins-SemiBold',fontSize:17}}>create one</Text>
                </Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default SignInComponent
import * as React from 'react';
import { View, Text ,StatusBar,Image, Touchable, TouchableOpacity,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpComponent from '../AuthModule/SignUp';
import SigInComponent from '../AuthModule/SignIn';
import Splash from '../MainAppModule/Splash';
import Home from '../MainAppModule/HomeScreen'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions'
import styles from '../Component/styles'

const Stack = createNativeStackNavigator();




const Header = ({navigation}) => {
    const loginStatus = useSelector(state => state.user.email)
    const dispatch = useDispatch()

    const showLogoutPopup = () => {
        Alert.alert('Logout', 'Are you sure you want ot logout?', [
            {
                text: 'Yes',
                onPress: () => {                   
                            dispatch(logoutUser())       
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'SignIn' }],
                    });
                }
            },
            {
                text: 'No',
                style: 'destructive'
            }
        ])
    }

    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
            <LinearGradient colors={['#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030', '#e10030','#fff']}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                paddingTop: 50, paddingHorizontal: 10,marginBottom:10
            }}>
                <TouchableOpacity onPress={showLogoutPopup}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../assets/arrow_blue_left.png')} tintColor='white' style={{ height: 20, width: 20 }} resizeMode='contain' />
                            <Text style={[styles.signInButtonTextStyle], { backgroundColor: 'white', padding: 1, borderRadius: 5, color:'#e10030'}}> Logout </Text>
                </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}>
                        <Text style={styles.signInButtonTextStyle}>{loginStatus}</Text>
                    <View style={{ marginLeft: 10, borderRadius: 6, borderWidth: 1, borderColor: '#fff', overflow: 'hidden', height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6e50d2' }}>
                        <Image source={require('../assets/i-1.png')} style={{ height: 34, width: 34, borderRadius: 6, }} resizeMode='contain' />
                    </View>
                </View>
            </View>            
            </LinearGradient>
            <Home />
            </View>
    )
}

function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'}
                backgroundColor="transparent" translucent={true} />
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Header} />

                <Stack.Screen name="SignIn" component={SigInComponent} />
                <Stack.Screen name="SignUp" component={SignUpComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
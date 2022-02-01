import React,{useRef} from 'react'
import { View, Text, Dimensions, Image, Animated} from 'react-native'

const {
    height,
    width
} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const App = ({navigation}) => {
    const springValue = useRef(new Animated.Value(0.1)).current;
    const loginStatus = useSelector(state => state.user.email)

    Animated.spring(
        springValue,
        {
            toValue: 1,
            friction: 1,
            useNativeDriver: true
        }
    ).start(({ finished }) => {
        /* completion callback */
        navigation.reset({
            index: 0,
            routes: [{ name: loginStatus == '' ? 'SignIn' : 'Home' }],
        });
    });
    return <LinearGradient style={{ flex: 1, }} colors={['#e10030', '#6e50d2','#e10030']}><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: width / 1.7, width: width / 1.7,elevation:15, backgroundColor: '#e53459', borderRadius: width / 1.7}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: width / 2, width: width / 2, backgroundColor: '#eb4a6c', borderRadius: width / 2 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: width / 2.5, width: width / 2.5, elevation: 10, backgroundColor: '#fff', borderRadius: width / 2.5 }}>
                    <Animated.Image source={require('../assets/segwitz.png')} style={{ height: 65, width: 65, 
                    transform: [{scale: springValue}]
                  }} />
            </View>
            </View>
        </View>
        
    </View>
        <Text style={{ bottom: 50,fontSize:15, alignSelf: 'center', color: '#fff', fontFamily: 'Poppins-Italic'}}>
           Segwitz is for Something Good...!
        </Text>
    </LinearGradient>
}


export default App
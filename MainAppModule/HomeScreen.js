// import React from 'react'
// import {View ,Text,Image,Dimensions, FlatList} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
// import styles from './styles'

// const {
//     height,
//     width
// } = Dimensions.get('window');

// const App = () => {

//     const data = [{
//         name:'Linda',
//         card_number:'1234 4567 8910 1234',
//         exp_date:'11/24',
//         firstColor: '#a8c0ff',
//         secondColor:'#3f2b96'
//     },
//         {
//             name: 'Linda',
//             card_number: '1234 4567 8910 1234',
//             exp_date: '11/24',
//             firstColor: '#40E0D0',
//             secondColor: '#FF8C00'

//         },
//         {
//             name: 'Linda',
//             card_number: '1234 4567 8910 1234',
//             exp_date: '11/24',
//             firstColor: '#11998e',
//             secondColor: '#38ef7d'

//         },
//         {
//             name: 'Linda',
//             card_number: '1234 4567 8910 1234',
//             exp_date: '11/24',
//             firstColor: '#3C3B3F',
//             secondColor: '#605C3C'

//         }]

//     const sepratorComponent = () => <View style={{
//         borderBottomColor: 'lightgray',
//         borderBottomWidth: 0.5, margin: 10
//     }} />

//     const renderItem = ({item}) => {
//         return (
//             <LinearGradient style={{  width:width/1.3,height:width/2,padding:20,borderRadius:20,margin:20 }}
//              colors={[item.firstColor, item.secondColor]}>
                
//                 <Text style={{ fontSize: 15, fontFamily: 'Poppins-SemiBold',color:'white'}}>CARDNAME</Text>
//                 <Text style={{fontSize:15,marginVertical:20,fontFamily:'Poppins-Regular',color:'white',letterSpacing:3}}>{item.card_number}</Text>
                
//                 <View style={{ flexDirection: 'row', marginVertical: 20,justifyContent:'flex-start'}}>
//                     <Text style={{ fontSize: 15, marginRight: 20, fontFamily: 'Poppins-Regular', color: 'white',}}>{item.name}</Text>
//                     <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular', color: 'white',}}>{item.exp_date}</Text>
//                 </View>

//                 </LinearGradient>
//         )
//     }
//     return <LinearGradient style={{ flex: 1, }} colors={['#e10030','#6e50d2']}>
//         <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center', paddingTop: 50, paddingHorizontal: 10}}>
//             <Image source={require('./assets/arrow_blue_left.png')} tintColor='white' style={{height:15,width:15}} resizeMode='contain' />
            
//             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', }}><Text style={styles.signInButtonTextStyle}>wsahim</Text>
//                 <View style={{ marginLeft: 10, borderRadius: 6, borderWidth: 1, borderColor: '#fff', overflow: 'hidden', height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor:'#6e50d2'}}>
//                 <Image source={require('./assets/i-1.png')} style={{height:34,width:34,borderRadius:6,}} resizeMode='contain' />
//             </View>
//             </View>
//         </View>
//         <View style={{ flex: 1, borderTopLeftRadius: 20, marginTop: 30,borderTopRightRadius:20,backgroundColor:'#fff'}}>
//             <Text style={{ marginTop: 20, marginLeft: 20, fontFamily: 'Poppins-SemiBold', fontSize: 16, color:'#e10030'}}>Card</Text>
//             <FlatList style={{ elevation: 5,marginTop:-10}} data={data} horizontal renderItem={renderItem}
//                 // ItemSeparatorComponent={sepratorComponent}
//             />
//         </View>
//     </LinearGradient>
// }   

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
    View, Image, ScrollView,
    ImageBackground, FlatList, Text, TouchableOpacity, Animated, TextInput
} from 'react-native';
import { themeColor, i1, i2, i3,  avtar1, avtar3,
     loveEmoji, sadEmoji, laughEmoji, thumbEmoji } from '../Constant'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../Component/responsive-ratio';
import { Ionicons } from '../Component/IconManager'


const App = ({ props }) => {
    

    const backgroundStyle = {
        flex: 1,
        paddingHorizontal: wp(3),
        backgroundColor: '#fff',
        paddingBottom: 10,
        // borderTopLeftRadius:20,
        // borderTopRightRadius: 20,
        paddingTop:3,
        elevation:5
    };
   




    const offset = useRef(new Animated.Value(0)).current;

  

    const [post, setPost] = useState([
        {
            image: i1,
            name: 'Kim',
            timeAgo: '1 Weak ago',
            description: 'Segwitz social community App with features.user can use this app for sharing blog, posts, timeline, create group, Create Pages, Chat/ Messages, Movies sharing, QA, Much more.',
            shares: 56,
            comments: 24,
            likes: 10,
            postImage: avtar1
        },
        {
            image: i2,
            name: 'Jason Bill',
            timeAgo: '1 month ago',
            description: 'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. David!',
            shares: 56,
            comments: 24,
            likes: 10,
            postImage: null
        },
        {
            image: i3,
            name: 'Mark Nobito',
            timeAgo: '1 day ago',
            description: 'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. David!',
            shares: 56,
            comments: 24,
            likes: 10,
            postImage: avtar3
        }
    ])

    const stories = [
        {
            id: "4",
            source: i3,
            user: "Ugur Erdal",
            avatar: i2
        },
        {
            id: "2",
            source: i3,
            user: "Mustafa",
            avatar: i2
        },
        {
            id: "5",
            source: i3,
            user: "Emre Yilmaz",
            avatar: i2
        },
        {
            id: "3",
            source: i3,
            user: "Cenk Gun",
            avatar: i2
        },
    ];
    const [daata, setData] = useState([{
        image: i1,
        name: 'Arzu',
    },
    {
        image: i2,
        name: 'Wezz',
    },
    {
        image: i3,
        name: 'Sameer',
    }, {
        image: i2,
        name: 'Fiction',
    }, {
        image: i1,
        name: 'Jacob',
    }, {
        image: i3,
        name: 'Kumar',
    }, {
        image: i2,
        name: 'Prashad',
    }, {
        image: i1,
        name: 'Jason',
    }, {
        image: i3,
        name: 'Bill',
    }])

    const text = useRef()


    const focus = () => {

        text.current.zoomIn(1000)


    }

   

    const renderItem = ({ item }) => {
        // console.log('item', item)
        return (
            <View style={{ flexDirection: 'row', height: hp(5), alignItems: 'center', marginTop: hp(1), marginHorizontal: hp(1.7) }}>
                <TouchableOpacity style={{ height: hp(5), borderRadius: wp(5) }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <View style={{ height: hp(5), width: hp(5), borderRadius: hp(3), backgroundColor: 'green', overflow: 'hidden', marginBottom: hp(0.5) }}>
                            <Image style={{ height: '100%', width: '100%' }} source={item.image} resizeMode={'cover'} />
                        </View>
                        <View style={{ height: hp(1.3), borderColor: '#fff', borderWidth: 1.5, top: hp(-2.6), left: hp(2.4), width: hp(1.3), borderRadius: hp(0.6), backgroundColor: '#06e574' }} />
                        <Text style={{ marginTop: hp(-1), fontSize: hp(1.6) }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItemPost = ({ item }) => {
        // console.log('item', item)
        return (
            <View style={{ flexDirection: 'column', marginVertical: hp(1), backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: wp(2) }}>
                    <View style={{ height: hp(6), flexDirection: 'row', width: wp(70), alignItems: 'center' }}>
                        <View style={{
                            height: hp(6), width: hp(6), borderRadius: hp(3.5),
                            justifyContent: 'center', marginRight: wp(4), alignItems: 'center', backgroundColor: '#afafaf'
                        }}>
                            <Image source={item.image} style={{ height: hp(5.5), width: hp(5.5), borderRadius: hp(2.55) }} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('HeadersProfile')}>
                                <Text style={{ fontSize: hp(2), color: themeColor, fontWeight: 'bold' }}>{item.name}</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: hp(1.6), color: 'gray' }}>{item.timeAgo}</Text>
                        </View>
                    </View>
                    {Ionicons('ellipsis-vertical', hp(2), '#333')}
                </View>
                <View style={{ paddingHorizontal: wp(3.5), marginBottom: hp(1) }}>
                    <Text style={{ fontSize: hp(1.6) }}>
                        {item.description}</Text>
                </View>
                {item.postImage && <View style={{ backgroundColor: 'transparent' }}>
                    <Image source={item.postImage} style={{ height: hp(25), width: wp(94) }} resizeMode='stretch' />
                </View>}
                <View style={{ flexDirection: 'row', width: wp(94), justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ width: wp(25), flexDirection: 'row', height: hp(4), marginTop: hp(.5), alignItems: 'center' }}>
                        <View style={{ height: hp(3), width: hp(3), borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'green' }}>
                            <Image source={thumbEmoji} style={{ height: '100%', width: '100%', borderRadius: 10 }} resizeMode='contain' />
                        </View>
                        <View style={{ left: -10, height: hp(3), width: hp(3), overflow: 'hidden', borderRadius: 30, borderWidth: 2, borderColor: 'white', backgroundColor: 'green' }}>
                            <Image source={loveEmoji} style={{ height: '100%', width: '100%', borderRadius: 10 }} resizeMode='contain' />
                        </View>
                        <View style={{ left: -20, height: hp(3), width: hp(3), borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'green' }}>
                            <Image source={sadEmoji} style={{ height: '100%', width: '100%', borderRadius: 10 }} resizeMode='stretch' />
                        </View>
                        <View style={{ left: -30, height: hp(3), width: hp(3), borderRadius: 20, overflow: 'hidden', borderWidth: 2, borderColor: 'white', backgroundColor: 'green' }}>
                            <Image source={laughEmoji} style={{ height: '100%', width: '100%', borderRadius: 10 }} resizeMode='cover' />
                        </View>
                        <Text style={{ left: -20, fontSize: hp(1.6) }}>
                            {item.likes}
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'row', width: 'auto', height: hp(4), marginTop: hp(.5), alignItems: 'center', paddingRight: wp(1), justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: wp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {Ionicons('chatbox-ellipses-outline', hp(2.2), '#afafaf')}
                                <Text style={{ marginLeft: wp(1), color: '#afafaf', fontSize: hp(1.7) }}>{item.comments} Comments</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {Ionicons('share-outline', hp(2.2), '#afafaf')}
                                <Text style={{ marginLeft: wp(1), color: '#afafaf', fontSize: hp(1.7) }}>{item.shares} Shares</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: wp(94), marginTop: hp(1), justifyContent: 'space-around', alignItems: 'center', }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {Ionicons('heart-outline', hp(2.2), '#afafaf')}
                            <Text style={{ marginLeft: wp(1), color: '#afafaf', fontSize: hp(1.7) }}>Like</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {Ionicons('chatbox-ellipses-outline', hp(2.2), '#afafaf')}
                            <Text style={{ marginLeft: wp(1), color: '#afafaf', fontSize: hp(1.7) }}>comment</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {Ionicons('share-outline', hp(2.2), '#afafaf')}
                            <Text style={{ marginLeft: wp(1), color: '#afafaf', fontSize: hp(1.7) }}>Share</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    // const ListHeader = () => {
    //     //View to set in Header
    //     return (
    //         <View style={{
    //             width: '100%',
    //             height: 45,
    //             backgroundColor: '#606070',
    //         }}>
    //             <Text style={{
    //                 textAlign: 'center',
    //                 color: '#333',
    //                 fontSize: 18,
    //                 padding: 7,
    //             }}>
    //                 Moment
    //     </Text>
    //         </View>
    //     );
    // };

    return (
        <View style={backgroundStyle}>            
            <ScrollView
                nestedScrollEnabled>
                {/* <View style={{ width: wp(94), height: headerHeight, }}> */}
                <View style={{ height: hp(5), flexDirection: 'row', marginTop: hp(1) }}>
                    <View style={{ height: hp(3), width: wp(1), backgroundColor: themeColor, marginRight: wp(2) }} />
                    <Text style={{
                        // textAlign: 'center',
                        color: '#333',
                        fontSize: hp(2.2),
                        fontWeight: 'bold'
                        // padding: 7,
                    }}>
                        Moments
                    </Text></View>
                {/* <Stories /> */}

                <FlatList
        data={daata}
        horizontal
        
        // style={{flex:1,height:hp(8)}}
        renderItem={renderItem} /> 

                {/* </View>
{/* </View> */}

                <TouchableOpacity onPress={() =>{}}>
                    <View ref={text} style={{ backgroundColor: themeColor, height: hp(4), paddingHorizontal: wp(4), marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: hp(2.2), color: '#fff' }}>Favorites</Text>
                        <View style={{ height: hp(3), width: hp(3), borderRadius: hp(1.5), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: hp(1.8) }}>57</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <FlatList
                    data={post}
                    contentContainerStyle={{
                        // alignItems: 'center',
                        // paddingTop: 220,
                        // paddingHorizontal: 20
                    }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        { useNativeDriver: false }
                    )}
                    // style={{ }}
                    renderItem={renderItemPost} /></ScrollView>
        </View>
    );
};
export default App;

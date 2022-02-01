import { StyleSheet } from "react-native";

const baseMargin = 5;
const doubleBaseMargin = 10;
const blue = "#ff0000";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor:'#fff'
  },
  headerContainerStyle: {
    // flex: 0.2,
    // alignItems: "center"
  },
  headerTitleStyle: {
    color: blue,
    fontSize: 30,
    fontWeight: "bold"
  },
  formContainerStyle: {
    paddingHorizontal: doubleBaseMargin,
    justifyContent: "space-around",

  },
  textInputStyle: {
    height: 50,
    marginVertical: baseMargin,
    borderRadius: 6,
    paddingHorizontal: doubleBaseMargin,
    backgroundColor: "transparent",
    borderColor: "lightgray",
    borderWidth: 1
  },
  signInButtonContainerStyle: {
    // flex: .3,
    // marginTop: -25,
    // alignItems: "flex-end",
    // paddingHorizontal: baseMargin,
    
  },
  signInButtonStyle: {
    // width: '100%',
    height: 50,
    // flexDirection: "row",
    justifyContent: "center",
    borderRadius:6,
      marginVertical: baseMargin,
      alignItems: "center",
      backgroundColor: "#e10030",
    //   marginHorizontal: baseMargin,
      


  },
    signUpButtonStyle: {
        // width: '100%',
        height: 50,
        // flexDirection: "row",
        justifyContent: "center",
        borderRadius: 6,
        marginVertical: baseMargin,
        alignItems: "center",
        backgroundColor: "#6e50d2",
        //   marginHorizontal: baseMargin,



    },
  signInButtonTextStyle: {
    color: "#fff",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
    fontFamily:'Poppins-Bold',
  },
  signInWithGoogleButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: doubleBaseMargin
  },
  signInWithGoogleButtonStyle: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 130 / 4,
    alignItems: "center",
    backgroundColor: "white"
  },
  signInWithGoogleButtonTextStyle: {
    color: "black",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",

    marginHorizontal: baseMargin
  },
  Createtext:{
        fontSize:15,
        color:'gray',
        fontFamily:'Poppins-Regular'

  },
  errorLabelContainerStyle: {
    // flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center"
  },
  loginButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonStyle: {
    alignItems: "center"
  },
  loginButtonTextStyle: {
    color: blue
  }
});

export default styles
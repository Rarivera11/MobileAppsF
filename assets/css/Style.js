import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: 'white',
    },
    stretch: {
      bottom: 20,
      width: 120,
      height: 110,
      marginBottom:10,
      marginTop:40,
      resizeMode: 'stretch',
      backgroundColor: 'white',
    },
    modalbackground: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20
    },
    header: {
      width: '100%',
      height: '40',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }, boton: {
      backgroundColor: 'green',
      paddingTop: 15,
      paddingBottom: 15
    },
    input: {
      height: 40,
      width: 300,
      paddingHorizontal: 5,
      backgroundColor: '#0000',
      marginBottom: 20,
      borderRadius:"5px",
      borderBottomEndRadius: 10,
      borderWidth: 1, 
      borderRadius: 10,
    },
    inputContainer: {
      flex: 1, 
      marginTop:20,
      backgroundColor: 'white', 
      alignItems: 'center',
      shadowColor: '#0000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 6,
    },
    btnLogin:{
      width:300,
      borderColor:"green",
      borderRadius:20,
      borderWidth: 5,
      marginTop:20,

    },
    recoverLabel:{
      color:"#00BFFF",
      marginTop:30,
    },
    resumenTipo:{
      alignItems:"flex-start"
      
    },
    resumenBalance:{
      alignItems:"flex-end"
    },
    labelTitle:{
      fontSize:11,
      fontWeight:"bold",
      color:"green",
      
    },
    labelDesc:{
      fontSize:11,
      color:"black",
      
      
    },
    lblcuenta:{
      marginBottom:10,
      marginTop:10,
      marginLeft:30,
      color:"green"
    },
    balance:{
      fontWeight:"bold",
    },
    userName:{
      padding:25,

    },
    lbluserName:{
      textAlign: 'center',
      borderColor:"green",
      color:"#228B22",
      fontSize:15,
      fontWeight:"bold",
    },
    lblWelcome:{
      textAlign: 'center',
      borderColor:"gray",
      color:"#6495ED",
      fontSize:15,
      fontWeight:"bold",
    },
    division:{
      borderBottomColor: 'black',
    borderBottomWidth: 1,
    }
  });

  

export default Styles;
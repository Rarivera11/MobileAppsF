import { StyleSheet } from "react-native-web";

const Styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: 'white',
    },
    stretch: {
      bottom: 20,
      width: 200,
      height: 200,
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
      backgroundColor: '#f4f4f4',
      marginBottom: 10,
      borderRadius:"5px"
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
      width:200
    },
    loginLabel:{

    }
    
  });

  

export default Styles;
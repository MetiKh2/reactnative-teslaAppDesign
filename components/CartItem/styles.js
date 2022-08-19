import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    header:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headerTitle:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing:1.1,
        alignItems:'center',
        justifyContent:'center',
    },
    batterySection:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:8
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position: 'absolute'
    },
    batteryImage:{
        width: 70,
        height: 26,
    },
    batteryTitle:{
        color: '#fff',
        marginLeft:10,
        fontSize:34,
        fontWeight: 'bold',
    },
    status:{
      alignItems:'center',  
    },
    statusText:{
        fontSize:20,
        fontWeight: 'bold',
        color: '#fff',
    },
    controls:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:165
    },
    controlButton:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:50,
        padding:15,
        marginLeft:20
    }
})
export default styles

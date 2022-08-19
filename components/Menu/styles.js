import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    menuItems:{
        paddingHorizontal:20
    },
    menuText:{
        color: '#fff',
        marginLeft:10,
        fontSize:16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    menuRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
        alignItems: 'center',

    },
    menuTextBox:{
        flexGrow:1,
    },
    subTitle:{
        color: 'grey',
        fontSize:14,
        marginLeft:15
    }
})
export default styles

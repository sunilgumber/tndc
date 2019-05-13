import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,Dimensions,createStackNavigator, createAppContainer} from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Splash </Text>

                <View style={styles.logocontainer}>
                    <Image  style={{width: 200, height: 200}} source={require('../images/TNDClogo.png')}></Image>
                </View>


                <Text style={styles.title}> TNDC </Text>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logocontainer:{
        backgroundColor:'black',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:100,
        height:300
    },
    title:{
        fontWeight: 'bold',
        fontSize:18

    }

})



import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Login </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  backgroundColor:'white',
  flex:1,
  alignItems:'center',
  justifycontent:'center',
},
  title:{
  fontWeight: 'bold',
    fontSize:18

  }

})

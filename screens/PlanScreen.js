import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const PlanScreen = ({ navigation }) => {
  return (
    <>
    <Header navigation={navigation} />
    <ImageBackground style={{flex: 1}} source={require('../assets/food1.jpg')} >
    
    </ImageBackground>
    </>
  )
}

export default PlanScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const MealInfoScreen = ({ route }) => {
  const { name, image, mealId } = route.params

  

  return (
    <View>
      <Text>{name}</Text>
      <Image source={{uri: image}} style={styles.image}  />
    </View>
  )
}

export default MealInfoScreen

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
})
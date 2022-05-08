import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ingredient = ({ name, image, id, navigation }) => {
  // image is undefined

  const navigate = () => {
    navigation.navigate('IngredientSearch', { name, id })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navigate} >
      <Image source={{uri: `https://www.themealdb.com/images/ingredients/${name}.png`}} style={styles.image} />
      <Text style={styles.txt} numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Ingredient

const styles = StyleSheet.create({
    container:{
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    txt:{
        fontSize: 20,
        width: 100,
        textAlign: 'center',
    }

})
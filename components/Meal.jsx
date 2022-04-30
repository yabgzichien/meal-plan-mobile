import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Meal = ({ name, image, mealId }) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.txt} numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Meal

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    txt:{
        fontSize: 20,
        width: 200,
        textAlign: 'center',
    }

})
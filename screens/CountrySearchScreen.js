import { StyleSheet, Text, View, ImageBackground, Alert, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Meal from '../components/Meal'
 
const CountrySearchScreen = ({ route, navigation }) => {
  const { countryName, countryFlag } = route.params
  const [searchMeal, setSearchMeal] = useState([])

  console.log(countryName)

  return (
    <>
    <Header navigation={navigation} />
    <ImageBackground source={require('../assets/food1.jpg')}  style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.imageContainer}>
                  {  countryFlag(countryName)  }
                </View>
                <Text style={styles.searchResultText}>{ countryName }</Text>
            </View>

            <FlatList 
                data={searchMeal}
                renderItem={({ item }) => 
                    <Meal 
                        name={item.strMeal} 
                        image={item.strMealThumb} 
                        mealId={item.idMeal} 
                        navigation={navigation}  
                        alignment={'vertical'}
                    />}
            />
        
        </View>
        </ScrollView>
    </ImageBackground>
    </>
  )
}

export default CountrySearchScreen

const styles = StyleSheet.create({
    container:{
        
    },
    searchContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderBottomColor: 'black',
        borderBottomWidth: 3
    },
    searchResultOf:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5
    },
    searchResultText:{
        textAlign: 'center',
        fontSize: 20
    },
    image:{
      width: 200,
      height: 130,
      resizeMode: 'contain',
    },
    imageContainer:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
})
import { StyleSheet, Text, View, ImageBackground, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Meal from '../components/Meal'
 
const SearchScreen = ({ route, navigation }) => {
  const params = route.params
  const [searchMeal, setSearchMeal] = useState([])

  const fetchData = async(abort) =>{
    await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`).then(res=>{
        setSearchMeal(res.data.meals)
    }).catch(err=>{
        Alert.alert(err.message)
    })
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <>
    <Header navigation={navigation} />
    <ImageBackground source={require('../assets/food1.jpg')}  style={{flex: 1}}>
        <View>
            <View style={styles.searchContainer}>
                <Text style={styles.searchResultOf}>Showing Search Result For</Text>
                <Text style={styles.searchResultText}>{params.search}</Text>
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
    </ImageBackground>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        
    },
    searchContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    searchResultOf:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5
    },
    searchResultText:{
        textAlign: 'center',
        padding: 5,
        fontSize: 16
    }
})
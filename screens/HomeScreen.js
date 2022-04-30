import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView, Alert, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import Header from '../components/Header'
import { Modal, Portal, Provider } from 'react-native-paper';
import ModalContext from '../MenuModalState';
import Meal from '../components/Meal';
import axios from 'axios'
import Context from '../Context';
import Ingredient from '../components/Ingredient';
import Country from '../components/Country';

const HomeScreen = ({ navigation }) => {
  const { randomMeals, setRandomMeals } = useContext(Context)
  const { popularIngre, setPopularIngre } = useContext(Context)
  const { randomIngredients ,setRandomIngredients } = useContext(Context)
  const { countriesName, setCountriesName } = useContext(Context)
  // loading states
  const [loadingRandomMeals, setLoadingRandomMeals] = useState(true)
  const [loadingPopularIngre, setLoadingPopularIngre] = useState(true)
  const [loadingRandomIngre, setLoadingRandomIngre] = useState(true)
  const [loadingCountries, setLoadingCountries] = useState(true)

  const fetchRandom = async() =>{
    if(randomMeals.length === 0){
      let randomizeMeals = []
      for(let i = 0; i < 10; i++)
        await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(res=>{
            randomizeMeals.push(res.data.meals[0])
        }).catch(err=>{
          Alert(err)
        })

        setRandomMeals(randomizeMeals)
        setLoadingRandomMeals(false)
    }
  }
  const fetchPopularIngredients = async() =>{
    let popularIngredients = []
    if(popularIngre.length === 0){
      for(let i = 0; i < 4; i++){
        await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
          popularIngredients.push(res.data.meals[i])
        }).catch(err=>{
          Alert(err.message)
        })
      }
  
      setPopularIngre(popularIngredients)
      setLoadingPopularIngre(false)      
    }else{
      setLoadingPopularIngre(false)
    }

  }
  const fetchRandomIngredients = async() =>{
    let randomizeIngredients = []
    if(randomIngredients.length === 0){
      for(let i = 0; i < 6; i++){
        await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res=>{
           const random = res.data.meals[Math.floor(Math.random()* 606)]
           randomizeIngredients.push(random)
         })
       }
       setRandomIngredients(randomizeIngredients)
       setLoadingRandomIngre(false)
    }else{
      setLoadingRandomIngre(false)
    }

}
const fetchCountries = async () =>{
  if(countriesName.length === 0){
    await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then(res=>{
      setCountriesName(res.data.meals)
    }).catch(err=>{
      alert(err.message)
    })
    setLoadingCountries(false)
  }else{
    setLoadingCountries(false)
  }

}

  
  useEffect(()=>{
    fetchRandom()
    fetchPopularIngredients()
    fetchRandomIngredients()
    fetchCountries()
  }, [])


  const { visible, setVisible } = useContext(ModalContext)
  const containerStyle = {
    backgroundColor: 'white', 
    padding: 20, 
    width: 500, 
    height: 200,
  };


  return (
    <>
    <Header />
    
    <ImageBackground source={require('../assets/food1.jpg')}  style={styles.container}>
    <ScrollView>
      <View style={styles.flatlist}>
          <Text style={styles.flatlistText}>Random Meals</Text>
          <FlatList  
            horizontal={true} 
            data={randomMeals}
            renderItem={({ item })=> 
            <Meal 
              mealId={item?.idMeal}  
              name={item?.strMeal} 
              key={item?.idMeal} 
              image={item?.strMealThumb}
               />}
          />
      </View>
      <View style={styles.flatlist}>
          <Text style={styles.flatlistText}>Popular Ingredients</Text>
          <FlatList  
            horizontal={true} 
            data={popularIngre}
            renderItem={({ item })=> 
            <Ingredient 
              id={item?.idIngredient}  
              name={item?.strIngredient} 
              key={item?.idIngredient} 
               />}
          />
      </View>
      <View style={styles.flatlist}>
          <Text style={styles.flatlistText}>Random Ingredients</Text>
          <FlatList  
            horizontal={true} 
            data={randomIngredients}
            renderItem={({ item })=> 
            <Ingredient 
              id={item?.idIngredient}  
              name={item?.strIngredient} 
              key={item?.idIngredient} 
               />}
          />
      </View>

      <View style={styles.flatlist}>
        <Text style={styles.flatlistText}>Countries</Text>
        <FlatList 
          horizontal={true}
          data={countriesName}
          renderItem={({ item })=> <Country countryName={item?.strArea} />}
        />
      </View>


      <Provider>


        <Portal>
        <Modal visible={visible} onDismiss={()=> setVisible(false)}   contentContainerStyle={containerStyle}>

        </Modal>
        </Portal>
        </Provider>
   
        </ScrollView>
    </ImageBackground>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    modal:{
      backgroundColor: 'white',
      width: 500,
      height: 500,
    },
    modalView:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    flatlist:{
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      marginVertical: 10,
    },
    flatlistText:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    countriesContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    }
})
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Alert, } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { fetchSingleMealData } from '../utils/utils'
import Header from '../components/Header'
import IngredientsList from '../components/IngredientsList'
import YoutubePlayer from "react-native-youtube-iframe";

const MealInfoScreen = ({ route, navigation }) => {
  const { name, image, mealId } = route.params
  const [mealObj, setMealObj] = useState({})

  useEffect(()=>{
    fetchSingleMealData(mealId).then(res=>{
        setMealObj(res)
    })
  }, [])
  const countryFlag = (country) =>{
    switch(country){
      case 'American':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/us-flag.gif'}} />
      case 'British':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/uk-flag.gif'}} />
      case 'Canadian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/ca-flag.gif'}} />
      case 'Chinese':
        return <Image style={styles.countryFlag} source={{uri:'https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg'}} />
      case 'Croatian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/hr-flag.gif'}} />
      case 'Dutch':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/nl-flag.gif'}} />
      case 'Egyptian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/eg-flag.gif'}} />
      case 'French':
         return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/fr-flag.gif'}} />
      case 'Greek':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/gr-flag.gif'}} />
      case 'Indian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/in-flag.gif' }}/>
      case 'Irish':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/ei-flag.gif'}} />
      case 'Italian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/it-flag.gif'}} />
      case 'Jamaican':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/jm-flag.gif'}} />
      case 'Japanese':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/ja-flag.gif'}} />
      case 'Kenyan':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/ke-flag.gif'}} />
      case 'Malaysian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/my-flag.gif'}} />
      case 'Mexican':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/mx-flag.gif'}} />
      case 'Moroccan':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/mo-flag.gif'}} />
      case 'Polish': 
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/pl-flag.gif'}} />
      case 'Portuguese':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/po-flag.gif'}} />
      case 'Russian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/rs-flag.gif'}} />
      case 'Spanish':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/sp-flag.gif'}} />
      case 'Thai':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/th-flag.gif'}} />
      case 'Tunisian':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/ts-flag.gif'}} />
      case 'Unknown':
        return <Image style={styles.countryFlag} source={{uri:'dsadas'}} />
      case 'Vietnamese':
        return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/vm-flag.gif'}} />
      case 'Turkish':
          return <Image style={styles.countryFlag} source={{uri:'https://www.worldometers.info/img/flags/tu-flag.gif'}} />
      default:
        return
    }
  }

  const youtubeId = () =>{
    if(mealObj.strYoutube){
        const normal = mealObj.strYoutube
        const ytId = normal.substring(normal.length - 11)
        return ytId
    }else{
        return null
    }
  }

  return (
    <>
    <Header navigation={navigation} />
    <ImageBackground source={require('../assets/food1.jpg')} style={{flex: 1}}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{name}</Text>            
            </View>
            <View style={styles.countryContainer}>
                <Text> {mealObj?.strArea} </Text>
                {countryFlag(mealObj?.strArea)}
            </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image}  />
            </View>
            <YoutubePlayer  
              height={200} 
              videoId={youtubeId()}
            />
            <IngredientsList mealObj={mealObj} />
        </View>

    
    </ScrollView>
    </ImageBackground>
    </>
  )
}

export default MealInfoScreen

const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 290,
        resizeMode: 'contain',
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    countryContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryFlag:{
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    container:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        flex: 1,
    },
    imageContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    }
})
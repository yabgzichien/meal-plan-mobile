import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Country = ({ countryName }) => {
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
  return (
    <View style={styles.container}>
      {countryFlag(countryName)}
      <Text>{countryName}</Text>
    </View>
  )
}

export default Country

const styles = StyleSheet.create({
    countryFlag:{
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    container:{
        marginHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
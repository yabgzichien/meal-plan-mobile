import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, Pressable  } from 'react-native'
import React, { useContext, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ModalContext from '../MenuModalState';
import { useRoute } from '@react-navigation/native';

const Header = ({ navigation }) => {
  
  const route = useRoute()

  const { visible, setVisible } = useContext(ModalContext)
  const [search, setSearch] = useState('')

  const searchItem = () =>{
    navigation.navigate('Search', { search })
  }
  const planScreen = () =>{
    navigation.navigate('Plan')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',width: 300}}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={()=> setVisible(false)}  style={styles.upperHeaderContainer}>
            <Entypo name="menu" size={30} color="black" />
          </Pressable>

          <Text style={{fontSize: 20, marginLeft: 20, fontWeight: '700'}}>{route.name}</Text>
        </View>

        <Pressable onPress={planScreen}>
          <FontAwesome5 name="calendar" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.textInputContainer}>
        <TextInput onChangeText={setSearch} value={search} style={styles.textInput} placeholder='search' />
        <Pressable onPress={searchItem}>
          <Feather name="search" size={24} color="black" style={styles.icon} />
        </Pressable>
        <FontAwesome name="filter" size={24} color="black" style={styles.icon} />
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? 30 : 0,
        backgroundColor: '#f2f2f2',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textInputContainer:{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    textInput:{
        width: 230,
        fontSize: 20,
        padding: 5,
    },
    icon:{
        paddingHorizontal: 5,
    },
    upperHeaderContainer:{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-between'
    }
})
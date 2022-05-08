import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import ModalContext from './MenuModalState';
import { useState } from 'react';
import Context from './Context'

// screens
import HomeScreen from './screens/HomeScreen';
import MealInfoScreen from './screens/MealInfoScreen';
import SearchScreen from './screens/SearchScreen';
import IngredientsSearchScreen from './screens/IngredientsSearchScreen';
import CountrySearchScreen from './screens/CountrySearchScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  //context values
  const [visible, setVisible] = useState(false)
  const [randomMeals, setRandomMeals] = useState([])
  const [popularIngre ,setPopularIngre] = useState([])
  const [randomIngredients ,setRandomIngredients] = useState([])
  const [countriesName, setCountriesName] = useState([])

  const contextValue = {
    randomMeals, setRandomMeals,
    popularIngre, setPopularIngre,
    randomIngredients ,setRandomIngredients,
    countriesName, setCountriesName
  }
  
  return (
    <NavigationContainer>
    <PaperProvider>
      <ModalContext.Provider value={{visible, setVisible}} >
        <Context.Provider value={contextValue}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="MealInfo" component={MealInfoScreen} options={{headerShown: false}} />
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="IngredientSearch" component={IngredientsSearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="CountrySearch" component={CountrySearchScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </Context.Provider>
      </ModalContext.Provider>
    </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

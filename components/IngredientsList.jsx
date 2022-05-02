import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IngredientsList = ({ mealObj }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ingredients</Text>
      <View style={styles.ingredientContainer}>
        <View>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient1} </Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient2}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient3}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient4}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient5}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient6}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient7}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient8}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient9}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient10}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient11}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient12}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient13}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient14}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient15}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient16}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient17}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient18}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient19}</Text>
            <Text style={styles.textIngredient}> {mealObj?.strIngredient20}</Text>
        </View>
        <View>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure1} </Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure2}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure3}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure4}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure5}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure6}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure7}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure8}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure9}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure10}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure11}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure12}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure13}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure14}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure15}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure16}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure17}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure18}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure19}</Text>
            <Text style={styles.textMeasure}> {mealObj?.strMeasure20}</Text>
        </View>
        </View>
    </View>
  )
}

export default IngredientsList

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10
    },
    headerText:{
        fontSize: 20,
        textDecorationLine: 'underline',
        fontWeight: '600',
    },
    ingredientContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textIngredient:{
        fontSize: 16,
        marginHorizontal: 10,
    },
    textMeasure:{
        fontSize: 16,
        marginHorizontal: 10,
    }
})
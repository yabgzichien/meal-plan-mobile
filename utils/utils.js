import axios from 'axios'

const fetchSingleMealData = async (mealId) =>{
    let mealData;
    await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then(res=>{
        mealData = res.data.meals[0]
    }).catch(err=>{
        console.log(err)
    })

    return mealData
}

export { fetchSingleMealData  }
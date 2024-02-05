/* eslint-disable no-unused-vars */
import Nav from './nav';
import './App.css';
import Card from './side';
import MealModal from './detailes';
import { useEffect, useState } from 'react';



function App() {
  // const cards = []
  const [page, setPage] = useState('home/random')
  const [meals, setMeals] = useState([])
  const [url, setUrl] = useState(`https://www.themealdb.com/api/json/v1/1/random.php`)


  if (page == 'home/random') {
    console.log('we are home at random meals');
  }

  useEffect(() => {
    fetchUsers(url);
  }, [url]);


  async function fetchUsers(url) {
    const temp = []


    let fav = await fetch('http://127.0.0.1:3000/favorite/').then(res => {
      return res.text()
    }).then(data =>
      data.split('\n')
    )

    if (url.indexOf('random') > -1) {
      for (let i = 0; i < 6; i++) {
        const response = await fetch(url)
          .then((res) => res.json())
          .then((user) => user)
        if (fav.includes(response.meals[0].idMeal)) {
          temp.push({ "id": response.meals[0].idMeal, "name": response.meals[0].strMeal, "image": response.meals[0].strMealThumb, "state": true })
        } else {
          temp.push({ "id": response.meals[0].idMeal, "name": response.meals[0].strMeal, "image": response.meals[0].strMealThumb, "state": false })
        }
      }
      setMeals(temp);
    } else if (url.indexOf('lookup')) {
      for (let i = 0; i < fav.length; i++) {
        if (fav[i] == "") {
          break
        }
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fav[i]}`)
          .then((res) => res.json())
          .then((user) => user)
        if (fav.includes(response.meals[0].idMeal)) {
          temp.push({ "id": response.meals[0].idMeal, "name": response.meals[0].strMeal, "image": response.meals[0].strMealThumb, "state": true })
        } else {
          temp.push({ "id": response.meals[0].idMeal, "name": response.meals[0].strMeal, "image": response.meals[0].strMealThumb, "state": false })
        }
      }
      setMeals(temp);
    } else {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((user) => user)
      response.meals.forEach(response => {
        if (fav.includes(response.idMeal)) {
          temp.push({ "id": response.idMeal, "name": response.strMeal, "image": response.strMealThumb, "state": true })
        } else {
          temp.push({ "id": response.idMeal, "name": response.strMeal, "image": response.strMealThumb, "state": false })
        }
      });
      setMeals(temp);
    }
  }

  const clickHandler = () => {
    setMeals([])
    let value = document.getElementById('search').value
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    fetchUsers(url);
  }

  const handelFav = () => {
    setMeals([])
    setUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`)
    fetchUsers(url);
  }

  if (meals.length === 0) {
    return (
      <div className="App">
        <Nav b={{ handler: clickHandler, handleFav: handelFav }}></Nav>
        <div className='container mt-5'>
          <h2>6 Random meals for you :</h2>
          <div className="row">
            <>NO DATA</>
          </div>
        </div>
        <MealModal />
      </div >
    )
  }

  return (
    <div className="App">
      <Nav b={{ handler: clickHandler, handelFav: handelFav }}></Nav>
      <div className='container mt-5'>
        <h2>6 Random meals for you :</h2>
        <div className="row">
          {meals.map(e => (<div className='col-4 mb-3' key={meals.indexOf(e)}>< Card d={e} key={e} /></div>))}
        </div>
      </div>
      <MealModal />
    </div >
  );
}

export default App;

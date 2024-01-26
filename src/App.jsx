import Nav from './nav';
import './App.css';
import Card from './side';
import MealModal from './detailes';
import { useEffect, useState } from 'react';



function App() {
  // const cards = []
  const [meals, setMeals] = useState([])
  const [url, setUrl] = useState(`https://www.themealdb.com/api/json/v1/1/random.php`)


  useEffect(() => {
    fetchUsers(url);
  }, [url]);


  async function fetchUsers(url) {
    const temp = []
    if (url.indexOf('random') > -1) {
      for (let i = 0; i < 6; i++) {
        const response = await fetch(url)
          .then((res) => res.json())
          .then((user) => user)
        temp.push({ "id": response.meals[0].idMeal, "name": response.meals[0].strMeal, "image": response.meals[0].strMealThumb, "state": false })
      }
      setMeals(temp);
    } else {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((user) => user)
      console.log(response);
      response.meals.forEach(response => {
        console.log('i will be in the for each');
        temp.push({ "id": response.idMeal, "name": response.strMeal, "image": response.strMealThumb, "state": false })
      });
      setMeals(temp);
    }
  }

  const clickHandler = () => {
    setMeals([])
    let value = document.getElementById('search').value
    console.log(value);
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    fetchUsers(url);
  }

  if (meals.length === 0) {
    return (
      <div className="App">
        <Nav b={{ handler: clickHandler }}></Nav>
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
      <Nav b={{ handler: clickHandler }}></Nav>
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

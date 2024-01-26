import { useEffect, useState } from 'react'
import Fav from './fav'

const Card = (data) => {
    const { d } = data
    const [id, setId] = useState(d.id)

    useEffect(() => {
        setId(d.id)
    }, [d.id])

    const handelClick = () => {
        let ingredients = []
        // eslint-disable-next-line no-undef
        const modal = new bootstrap.Modal('#mealDetails')
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => {
            return res.json()
        }).then(data => {

            for (let i = 0; i < 20; i++) {
                if (data.meals[0][`strIngredient${i + 1}`] != null && data.meals[0][`strIngredient${i + 1}`] != '') {
                    ingredients.push({ ing: data.meals[0][`strIngredient${i + 1}`], mes: data.meals[0][`strMeasure${i + 1}`] })
                } else {
                    break
                }
            }

            // console.log(ingredients);

            let image = document.getElementById('mealImage')
            let name = document.getElementById('mealName')
            let instructions = document.getElementById('mealInstructions')
            let tags = document.getElementById('mealTags')
            let mealIngredients = document.getElementById('mealIngredients')
            let video = document.getElementById('mealVideo')

            image.src = data.meals[0].strMealThumb
            name.innerHTML = data.meals[0].strMeal
            instructions.innerHTML = data.meals[0].strInstructions
            tags.innerHTML = data.meals[0].strTags === null ? 'NO TAG' : data.meals[0].strTags
            video.href = data.meals[0].strYoutube

            ingredients.forEach(i => {
                let li = document.createElement('li')
                li.innerHTML = `${i.ing} : ${i.mes}`
                li.classList.add('list-group-item')
                mealIngredients.appendChild(li)
            })

            modal.show()
        })
    }

    return (
        <div className="card" >
            <img src={d.image} className="card-img-top" alt="img"></img>
            <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <div className='row'>
                    <div className='col'>
                        <button className="btn btn-outline-primary" id={d.id} onClick={handelClick}>Details</button>
                    </div>
                    <div className='col'>
                        <Fav d={d} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
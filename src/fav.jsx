import { useState } from "react"

const Fav = (data) => {
    const { d } = data
    const [state, setState] = useState(d.state)
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(d.id)
    const handelClick = () => {
        if (state) {
            setState(false)
        } else {
            fetch(`http://127.0.0.1:3000/favorite/${id}`, { method: 'POST' })
                .then(res => {
                    return res.text()
                }).then(data => {
                    console.log(data);
                })
            setState(true)
        }
    }

    return (
        <button className={state === true ? "btn btn-danger" : "btn btn-outline-danger"} onClick={handelClick}>{state === true ? 'Favorite' : 'Mark As Favorite'}</button>
    )
}


export default Fav
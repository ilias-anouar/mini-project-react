import { useState } from "react"

const Fav = (data) => {
    const { d } = data
    const [state, setState] = useState(d.state)
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState(d.id)

    console.log(id);
    const handelClick = () => {
        if (state) {
            setState(false)
        } else {
            setState(true)
        }
    }

    return (
        <button className={state === true ? "btn btn-danger" : "btn btn-outline-danger"} onClick={handelClick}>{state === true ? 'Favorite' : 'Mark As Favorite'}</button>
    )
}


export default Fav
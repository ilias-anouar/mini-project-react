
const MealModal = () => {
    return (
        <div className="modal" id="mealDetails" tabIndex="-1">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="card w-100 mb-0">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="..." id="mealImage" className="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title" id="mealName">test</h5>
                                        <div className="row">
                                            <p className="card-text fw-bold">Ingredients</p>
                                            <ul id="mealIngredients" className="list-group list-group-flush">

                                            </ul>
                                        </div>
                                        <p className="card-text fw-bold">Instructions</p>
                                        <p className="card-text" id="mealInstructions">lorem</p>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-text"><small className="text-body-secondary" id="mealTags"></small></p>
                                            </div>
                                            <div className="col">
                                                <a className="btn btn-outline-danger" id="mealVideo" href="tt" target="blank">YouTube</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealModal
const Nav = (data) => {
    const { b } = data
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body" >
            <div className="container-fluid">
                <a className="navbar-brand" href="./">FOOOOD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./">Random</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./favorite">Favorite</a>
                        </li>
                        {/* <li className="nav-item">
                            <p className="nav-link" href="#">Link</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link disabled" aria-disabled="true" href="#">Disabled</p>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" id="search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="button" onClick={b.handler}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
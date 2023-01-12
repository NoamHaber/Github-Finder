import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound()
{
    return(
        <div id="not-found-container-container">
            <div id="not-found-container" className="main-container">
            <h1 className="not-found-header">Oops!</h1>
            <p className="not-found-paragraph">404 - The page was not found!</p>
                <div className="nav-back" id="error-button">
                    <Link className="error-link" to="/">
                        <div className="nav-back" id="take-home">Take me back home</div>
                        <FaHome className="nav-back" id="FaHome"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound

{/*
<div className="not-found-error main-container">
            <h1 className="not-found-header">Oops!</h1>
            <p className="not-found-paragraph">404 - The page was not found!</p>
                <div className="nav-back" id="error-button">
                    <Link className="error-link" to="/">
                        <div className="nav-back" id="take-home">Take me back home</div>
                        <FaHome className="nav-back" id="FaHome"/>
                    </Link>
                </div>
        </div>
*/}
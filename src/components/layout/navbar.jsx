import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

function Navbar({title}) {
    return (
        <nav>
        <div id="home-logo">
            <FaGithub id='git-symbol' />
            <span id='home-link'>
                {title}
            </span>
        </div>
            <div id='navigator-container'>
                <Link to="/" className='nav-btn nav-back'>
                    Home
                </Link>
                <Link to="/about" className='nav-btn nav-back'>
                    About
                </Link>
                <Link to="/search"  id='nav-search' className='nav-btn nav-back'>
                    <FaSearch id='srch-btn' className='nav-back' />
                </Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title : "This is my github project"
}

Navbar.propTypes = {
    title : PropTypes.string
}



export default Navbar
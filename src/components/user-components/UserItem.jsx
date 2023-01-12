import { Link } from "react-router-dom"

function UserItem({user : {login,avatar_url,html_url}}){
    return(
        <div className="user-container">
            <img className="user-image" src={avatar_url} alt="Profile img"></img>
            <div className="user-text nav-back">
                {login}
                <Link to={`/user/${login}`} className="nav-back user-link">
                    Visit this profile
                </Link>
            </div>
        </div>
    )
}

export default UserItem
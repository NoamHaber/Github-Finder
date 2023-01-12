import { useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import { FaTwitter,FaGithub,FaHome,FaBook, FaPeopleArrows, FaUsers, FaUserFriends, FaCodepen } from "react-icons/fa";
import GitHubContext from "../context/github/GitHubContext"
import { getUser } from "../context/github/GitHubActions";
import RepoList from "../components/repo-components/RepoList";


function UserProfile()
{
    const {currentUser,dispatch} = useContext(GitHubContext);
    
    const params = useParams()

    const handle_user_fetch = async () => {
        dispatch({type:'START_LOADING'});
        const {user_info,user_repos} = await getUser(params.login);
        dispatch({type:'GET_USER',payload:user_info});
        dispatch({type:'GET_REPOS',payload:user_repos});
        dispatch({type:'FINISH_LOADING'});
    }

    useEffect(()=>{
        handle_user_fetch();
    },[]);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        } = currentUser;
    

    let twitterLink=`http://www.twitter.com/${twitter_username}`;
    let websiteLink=`http://${blog}`    

    
    return(
        <div id="user-container" className="main-container">
            <div id="profile-header-container">
                <div id="profile-header">
                    <img className="profile-image" src={avatar_url} />
                    <div id="profile-name-and-login">
                        <div id="profile-name">{name}</div>
                        <div id="profile-login">{login}</div>
                        <div>
                            <a href={html_url} style={{color:'white'}} target="_blank">
                                <div id="visit-github">
                                    Visit this github profile
                                    <FaGithub id="visit-github-icon"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="profile-attributes">
                <div id="attribute-layout" style={{display : (location) ? "flex" : (blog) ? "flex" : (twitter_username) ? "flex" : "none" }}>
                    <div id="profile-location" className="attribute-item" style={{display: location ? 'flex' : 'none'}}>
                        <div className="attribute-definition">
                            <FaHome className="attribute-icon" />
                            Location
                        </div>
                        <div className="attribute-value">
                            {location}
                        </div>
                    </div>
                    <a href={twitterLink} target="_blank" style={{color:"white"}}>
                        <div id="profile-twitter" className="attribute-item" style={{display : twitter_username ? 'flex' : 'none'}}>
                            <div id="profile-twitter-acount" className="attribute-definition">
                                <FaTwitter id="twitter-icon" className="attribute-icon"/>
                                Twitter
                            </div>
                            <div className="attribute-value">
                                @{twitter_username}
                            </div>
                        </div>
                    </a>
                    <a href={websiteLink} target="_blank" style={{color:"white"}}>
                        <div id="profile-website" className="attribute-item" style={{display: blog ? 'flex' : 'none'}}>
                            <div id="profile-website" className="attribute-definition">
                                <FaBook id="book-icon" className="attribute-icon" />
                                Website
                            </div>
                            <div className="attribute-value">
                                Visit my website
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div id="profile-body">
                <div id="bio-container">
                    <div id="bio-layout" style={{display : bio ? 'block' : 'none'}}>
                        <div id="bio-header">
                            About me
                        </div>
                        <div id="bio-body">
                            {bio}
                        </div>
                    </div>
                </div>
                <div id="follow-container">
                    <div id="follow-layout">
                        <div className="showcase-stats">
                            <div className="showcase">
                                <span className="showcase-title">Following</span>
                                <div className="showcase-body">
                                    {following}
                                </div>
                            </div>
                            <div>
                                <FaUsers className="showcase-icon"/>
                            </div>
                        </div>
                        <div className="showcase-stats">
                                <div className="showcase">
                                    <span className="showcase-title">Followers</span>
                                    <div className="showcase-body">
                                        {followers}
                                    </div>
                                </div>
                                <div>
                                    <FaUserFriends className="showcase-icon"/>
                                </div>
                        </div>
                        <div className="showcase-stats">
                                <div className="showcase">
                                    <span className="showcase-title">Public repos</span>
                                    <div className="showcase-body">
                                        {public_repos}
                                    </div>
                                </div>
                                <div>
                                    <FaCodepen id="code-pen-icon" className="showcase-icon"/>
                                </div>
                        </div>
                    </div>
                </div>
                <RepoList />
            </div>
        </div>
    )
}

export default UserProfile
import { FaEye, FaInfo, FaLink, FaStar, FaUsb, FaUtensils } from "react-icons/fa";


function RepoItem({repo}){

    const {name,
        description
        ,html_url
        ,forks
        ,open_issues
        ,watchers_count
        ,stargazers_count} = repo;

    return(
        <a href={html_url} target="_blank" style={{color:"white"}}>
            <div id="repo-item">
            
            <div className="repo-header">
                <FaLink className="repo-link-icon"/>
                {name}
            </div>
            <div className="repo-description" style={{display: description ? 'block' : 'none'}}>
                {description}
            </div>
            <div className="repo-response">
                <div id="repo-response-viewed" className="repo-response-item">
                    <FaEye className="repo-response-icon"/> {watchers_count}
                </div>
                <div id="repo-response-starred" className="repo-response-item">
                    <FaStar className="repo-response-icon"/> {stargazers_count}
                </div>
                <div id="repo-response-issues" className="repo-response-item">
                    <FaInfo className="repo-response-icon"/> {open_issues}
                </div>
                <div id="repo-response-forks" className="repo-response-item">
                    <FaUtensils className="repo-response-icon"/> {forks}
                </div>
            </div>
        </div>        
        </a>
    )
}

export default RepoItem
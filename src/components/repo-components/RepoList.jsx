import { useContext } from "react"
import GitHubContext from "../../context/github/GitHubContext"
import RepoItem from "./RepoItem";

function RepoList(){

    const {repos} = useContext(GitHubContext);
    
    return(
        <>
            <h3 id="repo-title">
                {(repos.length>0) ? "Latest repositories":"No repositories found"}
            </h3>
            <div id="repo-container">
                <div id="repo-layout">
                    {repos.map( (item) => {
                    return <RepoItem key={item.id} repo={item} />
                    })}
                </div>
             </div>
        </>
    )
}

export default RepoList
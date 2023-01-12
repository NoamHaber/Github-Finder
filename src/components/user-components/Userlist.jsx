import { useContext } from "react"
import loadingSvg from "../../resources/loading.svg" 
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GitHubContext";

function Userlist({initialStance})
{
    const {userList,userLoading} = useContext(GitHubContext)

    if(userLoading)
    {
        return(
            <div id="loading-container">
                <img src={loadingSvg} className="loading-svg" alt="Page is loading..." />
            </div>
        )
    }
    else{
        if(initialStance==false){
            if(userList.length>0){
                return (
                    <>  
                        <div className="grid-container">
                        { userList.map((user) => {
                            return <UserItem key={user.id} user={user}/>
                        })}
                        </div>
                    </>
                )
            }
            else{
                return(
                    <div className="body-text no-found">
                        No results found...
                    </div>
                )
            }
        }
    }
}

export default Userlist
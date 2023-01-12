import { createContext,useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext()


export const GitHubProvider = ({children}) => {

    const initialState = {
        users : [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(GitHubReducer,initialState)

    return(
        <GitHubContext.Provider value={{userList : state.users ,userLoading : state.loading, currentUser:state.user,repos:state.repos, dispatch}}>
            {children}
        </GitHubContext.Provider>
    )
}


export default GitHubContext
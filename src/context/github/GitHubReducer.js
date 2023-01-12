function GitHubReducer(state,action)
{
    switch(action.type){
        case 'START_LOADING':
            return{
                ...state,
                loading:true
            }
        case 'GET_USERS':
            return {
                ...state,
                users:action.payload
            }
        case 'GET_USER':
            return{
                ...state,
                user:action.payload
            }
        case 'GET_REPOS':
            return{
                ...state,
                repos:action.payload
            }
        case 'FINISH_LOADING':
            return {
                ...state,
                loading:false
            }
        case 'CLEAR_USERS':
            return{
                ...state,
                users:[]
            }
        default:
            return state
    }
}

export default GitHubReducer
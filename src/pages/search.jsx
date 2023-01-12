import { FaSearch,FaTrash } from 'react-icons/fa'
import { useContext, useState } from 'react'
import GitHubContext from '../context/github/GitHubContext';
import Userlist from '../components/user-components/Userlist';
import { searchUsers } from '../context/github/GitHubActions';

function Search()
{
    const [text,setText] = useState('');
    const {userList,dispatch} = useContext(GitHubContext)
    const [initialStance,setInitialStance] = useState(true)

    const inputChange = (e) => setText(e.target.value);

    const handleKeyDown = (e) =>{
        if (e.keyCode === 13) {
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();    
        if(text != '')
        {
            dispatch({type:'START_LOADING'});

            const users = await searchUsers(text);

            dispatch({type:'GET_USERS',payload:users});
            dispatch({type:'FINISH_LOADING'});
            
            setText('');
            setInitialStance(false);

        }
    }
    const clearPressed = () =>{
        if (window.confirm("Are you sure you want to clear the user list?")) {
            dispatch({type:'CLEAR_USERS'});
            setInitialStance(true);
        }
    }
{/*  onKeyDown={handleKeyDown} */}
    return(
        <div id="search-container" className="main-container">
                <form id='search-bar' onSubmit={handleSubmit}>
                    <input placeholder="Enter a profile's name..." id="search-input" type="text" value={text} onChange={inputChange} />                            
                    <button type='submit' id='searchbar-button'>
                        <FaSearch id='searchbar-logo'/>
                    </button>
                    <button id='searchbar-clear' onClick={clearPressed} style={{display:(!initialStance) ? ((userList.length>0)? 'block': 'none') :'none'}}>
                        <FaTrash id='searchbar-trash' title='Clear the users'/>
                    </button>
                </form>
            <div id="search-results">
                <Userlist initialStance={initialStance}/>
            </div>
        </div>
    )
}

export default Search
{/*<FaSearch id='searchbar-logo' />*/}
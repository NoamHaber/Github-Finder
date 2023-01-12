import { FaCommentsDollar } from "react-icons/fa";

const gitHubAddress="https://api.github.com";
const gitHubToken="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";

export const searchUsers = async (text) => {
    
    if(text!==''){

        const params = new URLSearchParams({
            q: text
        });

        const response = await fetch(`${gitHubAddress}/search/users?${params}`,{Headers:{Authorization : `token ${gitHubToken}`}});

        const {items} = await response.json();

        return items
    }

}

export const getUser = async (username) => {

    if(username!==''){

        const repo_params = new URLSearchParams({
            sort:'created',
            per_page:9
        });

        const user_response = await fetch(`${gitHubAddress}/users/${username}`,{Headers:{Authorization : `token ${gitHubToken}`}});
        const user_repos = await fetch(`${gitHubAddress}/users/${username}/repos?${repo_params}`,{Headers:{Authorization : `token ${gitHubToken}`}});

        if(user_response.status === 404){
            window.location="/notfound"
        }
        else{

            const user_information = await user_response.json();
            const user_public_repos = await user_repos.json();

            const user_object={user_info:user_information,user_repos:user_public_repos};

            return user_object;
        }
    }
}

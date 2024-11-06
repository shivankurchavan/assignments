import { useEffect, useState } from "react"
import "./Assignment5.css"

export function Assignment5( {username}){
    const [profileData, setProfileData] = useState('')

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data=>setProfileData(data))
            .catch(error => console.error('Error fetching data:', error));
    },[username])
    
    return <div className="card">
        <div className="top">
            <div className="pic">
                <img src={profileData.avatar_url} alt={`${profileData.login}'s avatar `} />
            </div>
            <div className="details">
                <h2>{profileData.name || profileData.login}</h2>
                <p>{profileData.location || ""}</p>
                <p>{profileData.bio}</p>
            </div>
        </div>
        <div className="bottom">
            <div className="bin">
                <h2 >{profileData.followers}</h2>
                <p>followers</p>
            </div>
            <div className="bin">
                <h2>{profileData.following}</h2>
                <p>Following</p>
            </div>         
            <div className="bin">
                <h2>{profileData.public_repos}</h2>
                <p>Public Repos</p>
            </div>
        </div>
    </div>
}
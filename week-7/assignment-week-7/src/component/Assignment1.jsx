import "./Assignment1.css"

export function Assignment1(props){
    return <div className="card">
        <div className="top">
            <div className="pic">
                <img src={props.details.link} alt="Description of image" />
            </div>
            <div className="details">
                <h2>{props.details.name}</h2>
                <p>{props.details.location}</p>
            </div>
        </div>
        <div className="bottom">
            <div className="bin">
                <h2 >{props.details.followers}</h2>
                <p>followers</p>
            </div>
            <div className="bin">
                <h2>{props.details.following}</h2>
                <p>Following</p>
            </div>         
            <div className="bin">
                <h2>{props.details.posts}</h2>
                <p>Posts</p>
            </div>
        </div>
    </div>
}
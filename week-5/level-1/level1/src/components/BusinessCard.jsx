import { Socials } from "./Socials"

export function BusinessCard({cards, socials}){
    return <div  className="card-container" >
        {cards.map(function(card){
            return <div key={card.id}>
            <h1> {card.name} </h1>
            <p> {card.description} </p>
            <h2 > Interests </h2>
            {card.interests.map((interests , index) => <p className="interests" key={index}>{interests}<br/></p> )}
            <Socials socials={socials}/>
        </div>
        })}
    </div>
}

//{Links.map(link =><button >{Links.name}</button>)}
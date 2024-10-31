export function Socials({socials}){
    return <div className="social-buttons" >
        {socials.map((social,index) => <button key={index}>{social.title}</button>)}
    </div>
}
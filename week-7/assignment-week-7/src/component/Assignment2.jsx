import { useState } from "react"
export function Assignment2(){
    const [colour,setColour] = useState("white");

    function colourHandler(newColour){
        setColour(newColour)
    }
    
    
    return <div className="bg" style={{ backgroundColor: colour, height: '100vh' , width: '100vw' }}>
        <div className="nav">
            <button className="colour" onClick={()=>colourHandler("red")} >
                Red
            </button>

            <button className="colour" onClick={()=>colourHandler("yellow")}>
                Yellow                
            </button>
            <button className="colour" onClick={()=>colourHandler("purple")}>
                Purple
            </button>
            <button className="colour" onClick={()=>colourHandler("blue")} >
                Blue             
            </button>
            <button className="colour" onClick={()=>colourHandler("black")}>
                Black
            </button>
        </div>
    </div>
}
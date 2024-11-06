import { useState } from "react"

export function Assignment4(){
    const [count,setCount]=useState(0);
    const [para, setPara]=useState("");

    function generate(){
        const wordsArray = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
        let result = [];

        for (let i=0 ; i < parseInt(count, 10);i++ ){
            const randomWord= wordsArray[Math.floor(Math.random() * wordsArray.length)];
            result.push(randomWord);
        }

        setPara(result.join(' ')+'.');
    }

    return <div>
        <input placeholder="Enter number of words" value={count} onChange={(e)=> setCount(e.target.value)} ></input>
        <button onClick={generate}>Generate</button>
        <p>{para}</p>
    </div>
}
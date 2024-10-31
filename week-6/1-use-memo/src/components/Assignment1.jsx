import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expCal = (input) =>{
        if (input == 1 ){
            return 1;
        }
        else if (input <= 0 ){
            return 0;
        }
        else 
        return input*expCal(input-1);
    }
    const expensiveValue = useMemo(()=> expCal(input),[input]); 
    // Your solution ends here
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
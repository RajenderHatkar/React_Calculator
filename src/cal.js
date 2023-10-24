import React, { useState} from "react";


function Cal() {
    const[results,setResults]=useState("");
    const handleonclick=(e)=>{
        setResults(results+e.target.name)
    }
    const handleclaer=(e)=>{
        setResults("");
    }
    const calculate=(e)=>{
        const cal=eval(results);
        setResults(cal);
    }
    const handledel=(e)=>{
        setResults(results.toString().slice(0,-1));
    }



    return (

      <div className="container">
        <div className="calculator">
           <h1>React-Calculator-App</h1>
           <input type="text" value={results} className="output" />
           <div className="Keypad">
               <div className="row">
                   <button onClick={handleclaer} className="opsd">CE</button>
                   <button onClick={handledel} >C</button>
                   <button onClick={handleonclick} name="*">x</button>
                   <button onClick={handleonclick} name="/" className="ops">/</button>
                </div>
                <div className="row">
                    <button onClick={handleonclick} name="7">7</button>
                    <button onClick={handleonclick} name="8">8</button>
                    <button onClick={handleonclick} name="9">9</button>
                    <button onClick={handleonclick} name="-" className="ops">-</button>
                </div>
                <div className="row">
                    <button onClick={handleonclick} name="7">4</button>
                    <button onClick={handleonclick} name="8">5</button>
                    <button onClick={handleonclick} name="9">6</button>
                    <button onClick={handleonclick} name="+" className="ops">+</button>
                </div>
                <div className="row">
                   <button onClick={handleonclick} name="1">1</button>
                   <button onClick={handleonclick} name="2">2</button>
                   <button onClick={handleonclick} name="3">3</button>
                   <button onClick={calculate} className="ops">=</button>
                </div>
           </div>
        </div>
      </div>
        
    
    );
  }
  
  export default Cal;
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Functionalities(props) {

    const [str, setStr] = useState("Enter Something")

    const handleUpperCase = () => {                             // Convert to UpperCase
        console.log("upper case clicked")
        let newText = str.toUpperCase()
        setStr(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowerCase = () => {                             // COnvert To Lower Case                
        let newText = str.toLowerCase()
        setStr(newText)
        props.showAlert("Conevrted to Lowercase","success")

    }
    const handleClear = () => {                             // Convert To Camel Case                
        
        setStr("")
        props.showAlert("Text area  Clered","success")

    }

    const handleChange = (event) => {
        console.log("On Change");
        setStr(event.target.value)

    }

    const handleCopy=()=>{
        console.log("i am copy")
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied", "success")

    }
    const handleExtraSpace=()=>
    {
        let newText= str.split(/[ ]+/);
        setStr(newText.join(" "))
        props.showAlert("Extra Space removed","success")

    }

    return (
        <>
            <div className='container my-5 '>
                <h1>Enter the Text To analyze below</h1>
                <div className='mb-3'>
                    <textarea row="8" style={{ backgroundColor: props.mode === 'dark' ? 'black' :'white', color: props.mode === 'light' ? 'black' :'white'}} className="mh-100  form-control" id='myBox' value={str} onChange={handleChange}></textarea>
                </div>

                <button className="btn btn btn-primary mx-1" onClick={handleUpperCase}>Upper Case</button>
                <button className="btn btn btn-primary mx-1" onClick={handleLowerCase}>Lower Case</button>
                <button className="btn btn btn-danger mx-1" onClick={handleClear}>Clear</button>
                <button className="btn btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                
                <button className="btn btn btn-primary mx-1" onClick={handleExtraSpace}>Extra Space</button>
            </div>

            <div className='container'>
                <h1>Your Text Summary</h1>
                <p>{str.split(" ").length} Words and {str.length} Characters</p>
                <p>{0.008 * str.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{str.length>0?str:"Enter something to preview"}</p>
            </div>

        </>
    );
}

export default Functionalities
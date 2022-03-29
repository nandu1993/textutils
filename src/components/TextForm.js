import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [charLength, setCharLength] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [minCount, setMinCount] = useState(0)
    let mode= props.mode;

    const fontColorStyle={
        color:mode==="dark"?"white":"black"
    }

    const txtAreaStyle={
        color:mode==="dark"?"white":"black",
        backgroundColor:mode==="dark"?"#010f22":"white"
    }

    const handleUpClick = () => {
        let transText = text.toUpperCase();
        setText(transText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleLowClick = () => {
        let transText = text.toLowerCase();
        setText(transText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleClearClick = () => {
        setText("");
        countOperations("");
        props.showAlert("Text cleared","success")
    }

    const handleOnChange = (e) => {
        let nText = e.target.value;
        setText(nText);
        countOperations(nText);
    }

    const handleCopyClick = (e) => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard","success")
    }

    const countOperations = (nText) => {
        let wCount = nText.split(/\s+/).filter((e)=>{return e.length !==0}).length

        setCharLength(nText.length);
        setWordCount(wCount)
        setMinCount(countMins(nText))
    }

    const countMins = (nText) => {
        let totalTime = 0.008 * nText.split(/\s+/).filter((e)=>{return e.length !==0}).length;
        return totalTime;
    }

    return (
        <>
            <div className='container' style={fontColorStyle}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={txtAreaStyle} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className="container my-2" style={fontColorStyle}>
                <h2>Text Summery</h2>
                <p>{wordCount} words and {charLength} characters</p>
                <p> {minCount} Mins read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

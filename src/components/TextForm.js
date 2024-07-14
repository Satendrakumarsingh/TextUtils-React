import React, {useState} from 'react'


export default function TextForm(props) {
    // Value entered will be stored in text variable and setText function will be used to update the value of state variable text.
    // Value passed as parameter to useState hook is default value
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase.', 'success');
    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase.', 'success');
    }

    const handleExtraSpace = ()=>{
        let nexText = text.split(/[ ]+/);
        setText(nexText.join(" "));
        props.showAlert('Extra spaces successfully removed from text.', 'success');
    }

    const handleClearText = ()=>{
        setText('');
        props.showAlert('Text is cleared.', 'success');
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard', 'success');
    }

    const handleOnChange = (event)=>{
        //console.log("Handle on change.");
        setText(event.target.value);
    }
    return (
      <>
        <div className='container' style = {{color : props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear Text</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style = {{color : props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} minutes read.</p>
        </div>
        </>
    )
}

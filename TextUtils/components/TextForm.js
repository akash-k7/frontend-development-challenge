import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", 'success');

    }
    const handleLowClick = ()=>{
        //console.log("button was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", 'success');
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", 'success');
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the  Text");

  return (
      <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert To Lowercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
        </div>
      </>
  ) 
}

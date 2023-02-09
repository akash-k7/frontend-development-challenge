import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        //console.log("button was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the  Text");

  return (
      <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
        <div className="container my-3">
            <h2>summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
        </div>
      </>
  ) 
}

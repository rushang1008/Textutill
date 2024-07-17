import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
export default function TextForm(props) {
    const contenttoprint = useRef(null);
    const handleprintclick = useReactToPrint({
        documentTitle: "print this document",
        removeAfterPrint: true,
    });
  const handleupclick = () => {
        console.log("you clicked on uppercase button" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted To Uppercase","Sucess");
    }
    const handlecopy = () => {
        let newtext = document.getElementById("mybox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showalert("Copy Text","Sucess");
    }
    const handlelwclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted To Lowerercase","Sucess");
    }
    const handleclearclick = () => {
        let newtext = '';
        setText(newtext);
        props.showalert("Clear Text","Sucess");
    }
    const handleremovespace =()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Space Removed","Sucess");
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value)

    }
    const [text, setText] = useState("Enter the text here");
    return (
        <>
            <div className='container'style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" ref={contenttoprint}>
                    <textarea className="form-control"  id="mybox" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='light'?'black':'white'}}  rows="8"></textarea>
                </div>
                <div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelwclick} >Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick} >Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy} >Copy</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={() => { handleprintclick(null, () => contenttoprint.current) }}> Print </button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleremovespace} >Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3 " style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Text Summery</h1>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Notihing to preview"}</p>
            </div>
        </>
    )
}

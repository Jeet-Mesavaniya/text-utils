// import React, {useState} from 'react'
import React, { useState } from 'react'

export default function TextForm(props) {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
  countCons = 0;
  const [text, setText] = useState('');  
  // const [atext, setText] = useState('hi....');
  // setText("Enter Text here");
  // setText("hi")
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleUpClick = () =>{
    setText(text.toUpperCase());
    props.showAlert("converted to Uppercase","success")
  }
  const handleLoClick = () =>{
    setText(text.toLowerCase())
    props.showAlert("converted to Lowercase","success")
  }
  const handleClearClick = () =>{
    setText('')
  }
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };

 // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}

  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowwercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
          <button className="btn btn-primary mx-1" onClick={handleVoClick}>Vowels count</button>
          <button className="btn btn-primary mx-1" onClick={handleCoClick}>Consonants count</button>
          <button className='btn btn-primary mx-1'  onClick={downloadTxtFile}>Download Text</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>your text summery</h2>
          <p>{(text.trim().split(" ")).length} words and {text.length} charactrs</p>
          <p>{0.008 *  text.split(" ").length} minutes to read</p>
          <h3>You have entered:</h3>
          <p>{count} No. of Vowels</p>
          <p>{count1} No. of Consonants</p>
          <h3>preview</h3>
          <p>{text.length>0?text:'Enter somthing to preview it here'}</p>
        </div>
    </>
  )
}

import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  


  const handleOnChange = (event) => {
    console.log("on Change ");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success");

  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success")
    
  };
  const handleClearClick = () => {
    console.log("Cleartext was clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","Success")

  };
  const handleTextToSpeech = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text; //  text what you written
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to Speech Enabled","Success")

  };

  const capitalize = () => {
    let myArray = text.split(" ");
    console.log(myArray.length);
    let newArray = [];
    console.log(myArray);
    for (let i = 0; i < myArray.length; i++) {
      let firstCap = myArray[i].charAt(0).toUpperCase();
      newArray[i] = firstCap + myArray[i].slice(1);
    }
    let firstCapText = newArray.toString();
    let finalText = firstCapText.replace(/,/g, " ");
    console.log(newArray);
    setText(finalText);
    props.showAlert("Capitalized","Success")

  };

  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Symbols Removed","Success")

  };

  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Numbers Extracted","Success")

  };
  const handleTextExtract = () => {
    const regex = /[A-Z/a-z/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Text Extracted","Success")

  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text Reversed","Success")

  };

  const handleSPerLineClick = () => {
    let newText = text.replaceAll(".", "\n");
    setText(newText);
    props.showAlert("Paragraph to Lines","Success")

  };
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed","Success")

  };
  function handleSliceClick(event) {
    let newText = text.slice(0, 100);
    setText(newText);
    props.showAlert("Coverted to 100 Characters","Success")

  }

  // Function to remove duplicate words from the string
  const onRemoveDuplicatesClick = (e) => {
    let newText = text
      .split(" ")
      .filter(function (item, i, allItems) {
        return i === allItems.indexOf(item);
      })
      .join(" ");

    setText(newText);
    props.showAlert("Duplicates Removed","Success")

  };

  const makeid = () => {
    let thing="";
    let possible =
      "Frontend Masters is the best place to get it. They have courses on all the most important front-end technologies, from React to CSS, from Vue to D3, and beyond with Node.js and Full Stack.";
      var things = possible.split(" ");
      thing = things[Math.floor(Math.random()*things.length)];
    
    text.length!==0?setText( text +" "+ thing):setText( text + thing);
    props.showAlert("Generated a word "+thing ,"Success")

  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    props.showAlert("Started Downloading","Success")

  }

  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
    props.showAlert("Uploaded","Success")

}
const handleCopy = () => {
  console.log("I am copy");
  var text = document.getElementById("myBox");
  text.select();
 
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied","Success")


}

  return (
    <div style={{color:props.mode==="light"?"black":"white"}} className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor : props.mode==="light"?"white":"#13466e",color:props.mode==="light"?"black":"white"}}
        ></textarea>
      </div>

      <button disabled={text.length===0}  className="btn btn-secondary mx-2 my-2" onClick={handleUpClick}>
        {" "}
        Convert To UpperCase
      </button>
      <button disabled={text.length===0}  className="btn btn-secondary mx-2 my-2" onClick={handleLowClick}>
        {" "}
        Convert To Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>
        {" "}
        Clear Text
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleTextToSpeech}>
        {" "}
        Text To Speech{" "}
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={capitalize}>
        {" "}
        Capitalize
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handletextExtract}>
        {" "}
        Remove Symbols
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleNumExtract}>
        {" "}
        Extract Numbers
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleTextExtract}>
        {" "}
        Extract Text
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleReverse}>
        {" "}
        Reverse Text
      </button>
      <button
       disabled={text.length===0}  className="btn btn-secondary mx-2 my-2"
        onClick={handleSPerLineClick}
      >
        {" "}
        Paragraph to Lines
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>
        {" "}
        Remove Extra Spaces
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleSliceClick}>
        Convert to 100 Characters
      </button>
      <button
       disabled={text.length===0}  className="btn btn-secondary mx-2 my-2"
        onClick={onRemoveDuplicatesClick}
      >
        Remove Duplicates
      </button>
      <button className="btn btn-secondary mx-2 my-2" onClick={makeid}>
        Generate Words
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={downloadTxtFile}>
        Download
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <input type="file" className="btn btn-secondary my-2" accept="text/plain" onChange = {readTxt}/>



      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          there are {text.length === 0 ? 0 : text.trim().split(/\n| /).length} words and {text.length} characters{" "}
        </p>
        <p>
          Total time required to read the text is{" "}
         {0.008*60*(text.length === 0 ? 0 : text.trim().split(/\n| /).length)} seconds
        </p>
        <h2>PREVIEW</h2>
        <p>{text.length>0?text:"Enter Something To analyse"}</p>
        <h3>Characters per word</h3>
        <p>{text.replace(/ /g, "").length / text.split(" ").length}</p>
      </div>
    </div>
  );
}

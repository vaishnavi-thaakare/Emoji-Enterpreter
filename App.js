import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [meaning, setmeaning] = useState("");
  var object = {
    "😊": "smiling",
    "😂": "funny",
    "😜": "teasing",
    "👏": "clapping",
    "😢": "tension"
  };
  function inputChangeHandler(event) {
    // console.log(event.target.value)
    var userInput = event.target.value;

    var meaning = object[userInput];
    setmeaning(meaning);

    if (meaning === undefined) {
      meaning = " This is not in our datdabase";
    }
    setmeaning(meaning);
  }

  // console.log(userInput);
  return (
    <div className="App">
      <h1>Emoji Enterpreter</h1>
      <h2>Welcome !</h2>

      <input onChange={inputChangeHandler}></input>
      <h2>
        {" "}
        Meaning of this emoji is :
        <span style={{ color: "red" }}> {meaning}</span>{" "}
      </h2>
    </div>
  );
}

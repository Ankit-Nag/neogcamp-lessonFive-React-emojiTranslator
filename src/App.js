import React, { useState } from "react";
import "./styles.css";

//create a dictionary
const emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🏔️": "Snow-Capped Mountain",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🏖️": "Beach with Umbrella",
  "🏜️": "Desert",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction",
  "🏘️": "Houses",
  "🏠": "House",
  "🏡": "House with Garden",
  "🏢": "Office Building",
  "🏤": "Post Office",
  "🏥": "Hospital",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏩": "Love Hotel",
  "🏪": "Convenience Store",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏰": "Castle",
  "💒": "Wedding",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "⛲": "Fountain",
  "⛺": "Tent",
  "🌁": "Foggy",
  "🌃": "Night with Stars",
  "🏙️": "Cityscape"
  // "🌄": "Sunrise Over Mountains",
  // "🌅": "Sunrise",
  // "🌆": "Cityscape at Dusk",
  // "🌇": "Sunset",
  // "🌉": "Bridge at Night"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else {
      if (userInput === "") {
        setMeaning("");
      } else {
        setMeaning("Sorry! We do not have this in our dictionary.");
      }
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Travel and Places!</h1>
      <p className="subText"> Emoji Translator </p>
      <input className="inputBox" onChange={emojiInputHandler}></input>
      <div className="output">{meaning}</div>
      <h3 className="subText">Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="emojisWeKnow"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

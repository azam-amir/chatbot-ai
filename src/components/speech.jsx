import { useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const speak = () => {
    if (text.trim() !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Text to Speech Converter</h1>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something here..."
        style={{ marginBottom: "20px" }}
      />
      <br />
      <button
        onClick={speak}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;

import axios from "axios";
import "../App.css";
import { useMutation } from "react-query";
import { useState } from "react";
import MarkdownRenderer from "./markDownComponent";

const API_KEY = import.meta.env.VITE_API_URL;
const postApiRequest = async (text) => {
  const response = await axios.post(API_KEY, {
    contents: [
      {
        parts: [
          {
            text: text,
          },
        ],
      },
    ],
  });
  return response.data;
};
function Form() {
  const [inputText, setInputText] = useState("");

  const {
    mutateAsync: postApiMutation,
    data: postApiData,
    isLoading: postApiLoading,
    error: postApiError,
    isSuccess: postApiSuccess,
  } = useMutation(postApiRequest);

  const answerData = postApiData?.candidates[0]?.content?.parts[0]?.text;
  const handleGenerator = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Please Fill the values!");
      return;
    }
    postApiMutation(inputText);
    console.log(answerData, "postApiData");
    setInputText("");
  };
  // const handlePlayVoice = (answer) => {
  //   const utterance = new SpeechSynthesisUtterance(answer);
  //   speechSynthesis.speak(utterance);
  // };
  return (
    <form onSubmit={handleGenerator} style={{ width: "900px" }}>
      <h1>Ai Chatbot</h1>
      <div style={{ position: "sticky", top: "10px" }}>
        <textarea
          style={{
            width: "100%",
            height: "auto",
            minHeight: "80px",
            maxHeight: "150px",
            marginBottom: "10px",
            borderRadius: "20px",
            padding: "10px 15px",
            paddingTop: "10px",
            fontSize: "14px",
            resize: "none",
            overflowY: "auto",
          }}
          value={inputText}
          placeholder="Enter your question"
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleGenerator(e);
            }
          }}
        />
        <button type="submit">Generate Answer</button>
      </div>
      {postApiLoading && <h2>Loading...</h2>}
      {postApiError && <h2>Error fetching data</h2>}
      {postApiSuccess && (
        <div>
          <div>
            <p style={{ textAlign: "left" }}>
              {/* <ReactMarkdown>{answerData}</ReactMarkdown> */}
              <MarkdownRenderer answerData={answerData} />
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default Form;

import React, { useEffect, useState } from "react";
// import {useRef, useState} from "react";
// import React from "react";

import { Route, Routes, useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";
// import microPhoneIcon from "./Assets/Images/microphone.png";
import Home from "./Pages/Home/Home";
const Manual = React.lazy(() => import('./Pages/Manual/Manual'));




function App() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({})
  const commands = [
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "google help",
      callback: () => {
        setSearchData("manual");
        
      }
    },
    {
      command: "google search *",
      callback: (product) => {
        setSearchData(product);
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(searchData)
        })
          .then(response => {
            if (response.ok) {
              console.log('Message sent successfully!');
            } else {
              console.error('Failed to send message.');
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  useEffect(() => {
    console.log(transcript);
  }, [transcript]);
  // console.log(transcript)
  // const [isListening, setIsListening] = useState(false);
  // const microphoneRef = useRef(null);
  useEffect(() => {
    handleListing();
  }, [])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    // setIsListening(true);
    // microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    // setIsListening(false);
    // microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    // <div className="microphone-wrapper">
    //   <div className="mircophone-container">
    //     <div
    //       className="microphone-icon-container"
    //       ref={microphoneRef}
    //       onClick={handleListing}
    //     >
    //       <img src={microPhoneIcon} className="microphone-icon" alt=""/>
    //     </div>
    //     <div className="microphone-status">
    //       {isListening ? "Listening........." : "Click to start Listening"}
    //     </div>
    //     {isListening && (
    //       <button className="microphone-stop btn" onClick={stopHandle}>
    //         Stop
    //       </button>
    //     )}
    //   </div>
    //   {transcript && (
    //     <div className="microphone-result-container">
    //       <div className="microphone-result-text">{transcript}</div>
    //       <button className="microphone-reset btn" onClick={handleReset}>
    //         Reset
    //       </button>
    //     </div>
    //   )}
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Home handleReset={handleReset} commands={commands} handleListing={handleListing} />} />

      </Routes>
    </>
  );
}
export default App;
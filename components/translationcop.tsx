import React, { useState } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";
const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
  process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
  process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
);

speechConfig.speechRecognitionLanguage = "en-US";

const Translationcop = () => {
  const [text, setText] = useState("test");
  const [micOn, setMicOn] = useState(false);
  return (
    <div className="flex flex-col justify-center align-middle">
      <button
        className="btn btn-primary "
        onClick={() => {
          setMicOn(true);
          const audioConfig = mcsSDK.AudioConfig.fromDefaultMicrophoneInput();
          const speechRecognizer = new mcsSDK.SpeechRecognizer(
            speechConfig,
            audioConfig
          );
          speechRecognizer.startContinuousRecognitionAsync(() => {
            console.log("Starting");
          });
        }}
      >
        Press Me!
      </button>
      <p className="p-4">{text}</p>
    </div>
  );
};

export default Translationcop;

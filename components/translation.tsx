import React, { useState } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";
const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
  process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
  process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
);

speechConfig.speechRecognitionLanguage = "en-US";

const Translation = () => {
  const [text, setText] = useState("");

  const audioConfig = mcsSDK.AudioConfig.fromDefaultMicrophoneInput();

  const transcriber = new mcsSDK.ConversationTranscriber(
    speechConfig,
    audioConfig
  );

  transcriber.sessionStarted = (s, e) => {
    console.log(e);
  };
  transcriber.sessionStopped = (s, e) => {
    console.log(e);
    console.log("session stopped");
  };

  transcriber.transcribing = (s, e) => {
    setText((t) => t + " " + e.result.text);
  };

  return (
    <div className="flex flex-col justify-center align-middle p-4">
      <button
        className="btn btn-primary "
        onClick={() => {
          transcriber.startTranscribingAsync(() => {
            console.log("transcribing started");
            transcriber.transcribing;
          });
        }}
      >
        Press Me!
      </button>
      <p className="p-4 text-6xl flex flex-grow-3">{text}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          transcriber.stopTranscribingAsync(() => {});
        }}
      >
        To stop press me!
      </button>
    </div>
  );
};

export default Translation;

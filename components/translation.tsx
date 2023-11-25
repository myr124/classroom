import React, { useState } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";
const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
  process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
  process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
);

speechConfig.speechRecognitionLanguage = "en-US";

const Translation = () => {
  const [text, setText] = useState("test");

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
  };
  transcriber.transcribing = (s, e) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col justify-center align-middle">
      <button
        className="btn btn-primary "
        onClick={() => {
          console.log("Starting");
          transcriber.startTranscribingAsync(() => {
            console.log("transcribing started");
            transcriber.transcribed = (s, e) => {
              setText(e.result.text);
            };
          });
        }}
      >
        Press Me!
      </button>
      <p className="p-4">{text}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("stopping");
          transcriber.stopTranscribingAsync(() => {});
        }}
      >
        To stop press me!
      </button>
    </div>
  );
};

export default Translation;

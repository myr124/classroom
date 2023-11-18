"use client";

import React, { useEffect, useState } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";
const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
  process.env.NEXT_PUBLIC_SPEECH_KEY,
  process.env.NEXT_PUBLIC_SPEECH_REGION
);

speechConfig.speechRecognitionLanguage = "en-US";

const Translation = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const audioConfig = mcsSDK.AudioConfig.fromDefaultMicrophoneInput();
    const speechRecognizer = new mcsSDK.SpeechRecognizer(
      speechConfig,
      audioConfig
    );
    speechRecognizer.recognizeOnceAsync(async (result) => {
      setText(result.text);
      speechRecognizer.close();
    });
  }, []);
  return <div>{text}</div>;
};

export default Translation;

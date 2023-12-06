"use client";

import React, { useState, useRef, useEffect } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";

const Fileupload = () => {
  const [myTranscript, setMyTranscript] = useState("");

  return (
    <div className="mt-2">
      <input
        type="file"
        accept="audio/vnd.wave"
        id="audio-file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={async (e) => {
          const audioFile = e?.target?.files?.[0];
          if (!audioFile) return;

          const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
            process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
            process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
          );
          speechConfig.speechRecognitionLanguage = "en-US";

          const audioConfig = mcsSDK.AudioConfig.fromWavFileInput(audioFile);
          const recognizer = new mcsSDK.SpeechRecognizer(
            speechConfig,
            audioConfig
          );

          recognizer.recognizeOnceAsync((result) => {
            let text;
            if (result.reason === mcsSDK.ResultReason.RecognizedSpeech) {
              text = `${result.text}`;
              setMyTranscript(result.text);
            } else {
              console.log(
                "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
              );
            }
          });
        }}
      />
      Convert speech to text from an audio file.
      <textarea
        className="textarea textarea-bordered textarea-lg w-full p-4 text-6xl flex flex-grow-3 min-h-[500px]"
        value={myTranscript}
      ></textarea>
    </div>
  );
};

export default Fileupload;

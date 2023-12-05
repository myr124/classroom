import React, { useState, useRef, useEffect } from "react";
import * as mcsSDK from "microsoft-cognitiveservices-speech-sdk";
// const speechConfig = mcsSDK.SpeechConfig.fromSubscription(
//   process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
//   process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
// );

// speechConfig.speechRecognitionLanguage = "en-US";

const Translation = () => {
  const [isListening, setIsListening] = useState(false);
  const speechConfig = useRef<mcsSDK.SpeechConfig | null>(null);
  const audioConfig = useRef<mcsSDK.AudioConfig | null>(null);
  const recognizer = useRef<mcsSDK.SpeechRecognizer | null>(null);

  const [myTranscript, setMyTranscript] = useState("");
  const [recognizingTranscript, setRecTranscript] = useState("");

  useEffect(() => {
    speechConfig.current = mcsSDK.SpeechConfig.fromSubscription(
      process.env.NEXT_PUBLIC_SPEECH_KEY ?? "",
      process.env.NEXT_PUBLIC_SPEECH_REGION ?? ""
    );
    speechConfig.current.speechRecognitionLanguage = "en-US";

    audioConfig.current = mcsSDK.AudioConfig.fromDefaultMicrophoneInput();
    recognizer.current = new mcsSDK.SpeechRecognizer(
      speechConfig.current,
      audioConfig.current
    );

    const processRecognizedTranscript = (
      event: mcsSDK.SpeechRecognitionEventArgs
    ) => {
      const result = event.result;
      console.log("Recognition result:", result);

      if (result.reason === mcsSDK.ResultReason.RecognizedSpeech) {
        const transcript = result.text;
        console.log("Transcript: -->", transcript);
        // Call a function to process the transcript as needed

        setMyTranscript((prevTranscript) => prevTranscript + transcript);
      }
    };

    // const processRecognizingTranscript = (
    //   event: mcsSDK.SpeechRecognitionEventArgs
    // ) => {
    //   const result = event.result;
    //   console.log("Recognition result:", result);
    //   if (result.reason === mcsSDK.ResultReason.RecognizingSpeech) {
    //     const transcript = result.text;
    //     console.log("Transcript: -->", transcript);
    //     // Call a function to process the transcript as needed

    //     setRecTranscript(transcript);
    //   }
    // };

    recognizer.current.recognized = (s, e) => processRecognizedTranscript(e);
    // recognizer.current.recognizing = (s, e) => processRecognizingTranscript(e);

    recognizer.current.startContinuousRecognitionAsync(() => {
      console.log("Speech recognition started.");
      setIsListening(true);
    });

    return () => {
      recognizer.current?.stopContinuousRecognitionAsync(() => {
        setIsListening(false);
      });
    };
  }, []);

  const pauseListening = () => {
    setIsListening(false);
    recognizer.current?.stopContinuousRecognitionAsync();
    console.log("Paused listening.");
  };

  const resumeListening = () => {
    if (!isListening) {
      setIsListening(true);
      recognizer.current?.startContinuousRecognitionAsync(() => {
        console.log("Resumed listening...");
      });
    }
  };

  const stopListening = () => {
    setIsListening(false);
    recognizer.current?.stopContinuousRecognitionAsync(() => {
      console.log("Speech recognition stopped.");
    });
  };

  return (
    <div className="flex flex-col justify-center align-middle p-4">
      <button className="btn btn-primary " onClick={resumeListening}>
        Press Me!
      </button>
      <p className="p-4 text-6xl flex flex-grow-3">{myTranscript}</p>
      <button className="btn btn-primary" onClick={stopListening}>
        To stop press me!
      </button>
    </div>
  );
};

export default Translation;

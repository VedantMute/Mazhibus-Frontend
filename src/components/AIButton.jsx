import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
export default function AIButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  function startListening(){
      SpeechRecognition.startListening;
  }
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    startListening();
  };

  const { transcript, listening } = useSpeechRecognition();

  return (
    <>
      <div className={`bg-gradient-to-r from-fuchsia-500 to-pink-500  px-8 py-3  hover:from-violet-500 hover:to-pink-500  fixed ${
            isExpanded
              ? "h-32 w-full right-0 rounded-t-xl bottom-16 hover:from-fuchsia-500 hover:to-pink-500 "
              : "w-52 bottom-24 right-8 rounded-full"
          }`}>
        <div className="flex justify-between"
          onClick={handleClick}
        >
          <div>
            {isExpanded ? (
              <svg
                height="24"
                width="24"
                fill="#000"
                viewBox="0 0 24 24"
                className="close-icon"
              >
                <path d="M12 10.586L16.95 5.636l1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414L12 10.586z"></path>
              </svg>
            ) : (
              <svg
                height="24"
                width="24"
                fill="#000"
                viewBox="0 0 24 24"
                className="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
            )}
          </div>
          <button>
            {isExpanded ? "Speak to book ticket (under development)" : "Book with AI"}
          </button>
        </div>
        <div className={`${
            isExpanded
              ? ""
              : "hidden"
          }`}>
          <p>Microphone: {listening ? "on" : "off "}
          <button onClick={SpeechRecognition.startListening}>  {"Start"}</button></p> 
          <p>{transcript}</p>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
    const textArray = [
        "Hello, Vite React Typewriter!",
        "This is a second sentence.",
        "And here is a third sentence."
    ];
    const [displayText, setDisplayText] = useState('');
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);  

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setDisplayText((prevText) => {
                if (index === textArray[currentSentenceIndex].length) {
                    clearInterval(intervalId);

                    // Move to the next sentence after a delay
                    setTimeout(() => {
                        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                    }, 1000);

                    return prevText;
                }

                index += 1;
                return textArray[currentSentenceIndex].substring(0, index);
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, [textArray, currentSentenceIndex]);

    return (
        <div className="typewriter">
            <h1>
                I am a {displayText}
                <span className="cursor">|</span>
            </h1>
        </div>
    );
};

export default Typewriter
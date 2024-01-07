import { createContext, useEffect, useRef, useState } from 'react';

export const ScrollingContext = createContext();

const ScrollingProvider = ({ children }) => {
    const [currentSection, setCurrentSection] = useState("");

    const aboutRef = useRef(null);
    const toolsRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = () => {
        const position = window.scrollY + 200;
        const about = aboutRef.current.offsetTop;
        const tools = toolsRef.current.offsetTop;
        const contact = contactRef.current.offsetTop;
        if ((position >= about) && (position < tools)) {
            setCurrentSection("#about");
        } else if ((position >= tools) && (position < contact)) {
            setCurrentSection("#tools");
        } else if ((position >= contact)) {
            setCurrentSection("#contact");
        }else{
            setCurrentSection(""); 
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollingInfo = {
        aboutRef,
        toolsRef,
        contactRef,
        currentSection,
    }

    return (
        <ScrollingContext.Provider value={scrollingInfo}>
            {children}
        </ScrollingContext.Provider>
    );
};

export default ScrollingProvider;
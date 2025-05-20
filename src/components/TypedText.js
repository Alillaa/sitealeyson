// src/components/TypedText.js
import React, { useState, useEffect, useRef } from 'react';

const TypedText = ({ textToType, typingSpeed = 80 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const currentIndexRef = useRef(0);
    const cursorRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        currentIndexRef.current = 0;
        setDisplayedText('');

        if (cursorRef.current) {
            cursorRef.current.style.animation = 'none'; // Önceki blink animasyonunu durdur
            cursorRef.current.style.display = 'inline-block'; // İmleci görünür yap
        }

        intervalRef.current = setInterval(() => {
            if (currentIndexRef.current < textToType.length) {
                setDisplayedText((prevText) => prevText + textToType.charAt(currentIndexRef.current));
                currentIndexRef.current += 1;
            } else {
                clearInterval(intervalRef.current);
                if (cursorRef.current) {
                    cursorRef.current.style.animation = 'blink 0.8s infinite'; // Yazma bitince blink animasyonunu başlat
                }
            }
        }, typingSpeed);

        return () => {
            clearInterval(intervalRef.current); // Component unmount olduğunda interval'i temizle
        };
    }, [textToType, typingSpeed]);

    return (
        <span className="typed-text-container">
      <span id="typed-name" className="typed-text">
        {displayedText}
      </span>
            {/* İmleç için boş bir span, CSS ile boyutlandırılacak ve animasyon alacak */}
            <span className="cursor" ref={cursorRef}></span>
    </span>
    );
};

export default TypedText;

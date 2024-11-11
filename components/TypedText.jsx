'use client';

import React, { useEffect, useState } from 'react';

const words = ['SENSOR', 'CAMERA', 'RADAR','LiDAR'];
const typingSpeed = 150;
const delayBetweenWords = 2000;

const TypedText = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, typingSpeed / 2);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="blue-cursor">
      {text}
      <span className="typed-cursor">|</span>
    </span>
  );
};

export default TypedText;
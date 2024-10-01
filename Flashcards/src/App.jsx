import React, { useState } from 'react';
import './App.css';

// Import images from the assets folder
import rose from './assets/rose.jpg';
import sunflower from './assets/sunflower.jpg';
import orchid from './assets/orchid.jpg';
import tulip from './assets/tulip.jpg';
import daisy from './assets/daisy.jpg';
import lavender from './assets/lavender.jpg';
import peony from './assets/peony.jpg';
import cherryblossom from './assets/cherryblossom.jpg';
import lily from './assets/lily.png';
import hibiscus from './assets/hibiscus.jpg';

const App = () => {
  const flashcards = [
    {
      question: rose,
      answer: "Rose: Symbol of love and romance.",
      category: "Easy",
    },
    {
      question: sunflower,
      answer: "Sunflower: Symbol of loyalty and longevity.",
      category: "Medium",
    },
    {
      question: orchid,
      answer: "Orchid: Represents beauty, strength, and love.",
      category: "Hard",
    },
    {
      question: tulip,
      answer: "Tulip: Symbolizes perfect love and rebirth.",
      category: "Easy",
    },
    {
      question: daisy,
      answer: "Daisy: Represents purity, innocence, and true love.",
      category: "Easy",
    },
    {
      question: lavender,
      answer: "Lavender: Symbol of calmness and relaxation.",
      category: "Medium",
    },
    {
      question: peony,
      answer: "Peony: Represents prosperity, good fortune, and honor.",
      category: "Medium",
    },
    {
      question: cherryblossom,
      answer: "Cherry Blossom: Symbol of beauty, life, and impermanence.",
      category: "Hard",
    },
    {
      question: lily,
      answer: "Lily: Represents purity, passion, and remembrance.",
      category: "Easy",
    },
    {
      question: hibiscus,
      answer: "Hibiscus: Symbolizes delicate beauty and femininity.",
      category: "Hard",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? flashcards.length - 1 : prevCard - 1
    );
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <h1>Flower Flashcards!</h1>
      <p>A fun way to learn about flowers and their meanings.</p>
      <p>Total Cards: {flashcards.length}</p>

      <div className="flashcard-container">
        <div
          className={`card ${flashcards[currentCard].category.toLowerCase()}`}
          onClick={flipCard}
        >
          {isFlipped ? (
            <p>{flashcards[currentCard].answer}</p>
          ) : (
            <img
              src={flashcards[currentCard].question}
              alt="Flower"
              className="flower-image"
            />
          )}
        </div>
      </div>

      <div className="button-container">
        <button className="nav-button" onClick={prevCard}>
          &lt; Prev
        </button>
        <button className="nav-button" onClick={nextCard}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default App;

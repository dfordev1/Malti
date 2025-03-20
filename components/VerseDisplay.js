import { useState } from 'react';
import styles from '../styles/VerseDisplay.module.css';

export default function VerseDisplay({ quranData, selectedSurah, selectedVerse, onVerseChange }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get verses array from quranData
  const currentSurah = quranData?.[selectedSurah];
  const verses = currentSurah?.verses ? Object.keys(currentSurah.verses).sort((a, b) => Number(a) - Number(b)) : [];
  const currentIndex = verses.indexOf(selectedVerse);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onVerseChange(verses[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < verses.length - 1) {
      onVerseChange(verses[currentIndex + 1]);
    }
  };

  if (!quranData) {
    return <div className={styles.message}>Loading Quran data...</div>;
  }

  if (!selectedSurah) {
    return <div className={styles.message}>Please select a surah.</div>;
  }

  if (!selectedVerse) {
    return <div className={styles.message}>Please select a verse from {currentSurah?.name || selectedSurah}.</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  // Create a title and section title based on the current surah
  const pageTitle = `${selectedSurah} ${currentSurah.name.toUpperCase()}`;
  const sectionTitle = "Surah Translation";

  return (
    <div className={styles.verseDisplay}>
      {/* Page title */}
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      
      {/* Section title */}
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      
      <div className={styles.verseContent}>
        {loading ? (
          <div className={styles.loading}>Loading verse...</div>
        ) : (
          <div className={styles.flowingText}>
            {verses.map(verseNumber => {
              const verse = currentSurah.verses[verseNumber];
              const isCurrentVerse = verseNumber === selectedVerse;
              
              return (
                <span 
                  key={verseNumber} 
                  className={`${styles.verseInFlow} ${isCurrentVerse ? styles.currentVerse : ''}`}
                  id={`verse-${verseNumber}`}
                >
                  <sup className={styles.verseNumber}>{verseNumber}</sup> 
                  {verse.translation} 
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className={styles.navigation}>
        <button 
          onClick={handlePrevious} 
          disabled={currentIndex <= 0}
          className={styles.navButton}
          aria-label="Previous"
        >
          ‹
        </button>
        <button 
          onClick={handleNext} 
          disabled={currentIndex === -1 || currentIndex >= verses.length - 1}
          className={styles.navButton}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
} 
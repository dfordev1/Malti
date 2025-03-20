import React from 'react';

function VerseSelector({ quranData, selectedSurah, selectedVerse, onSurahChange, onVerseChange }) {
  const surahs = Object.keys(quranData);
  const verses = selectedSurah ? Object.keys(quranData[selectedSurah]) : [];

  return (
    <div className="verse-selector">
      <select
        value={selectedSurah}
        onChange={(e) => onSurahChange(e.target.value)}
        aria-label="Select Surah"
      >
        <option value="" disabled>Select Surah</option>
        {surahs.map((surah) => (
          <option key={surah} value={surah}>
            {surah}
          </option>
        ))}
      </select>
      <select
        value={selectedVerse}
        onChange={(e) => onVerseChange(e.target.value)}
        disabled={!selectedSurah}
        aria-label="Select Verse"
      >
        <option value="" disabled>Select Verse</option>
        {verses.map((verse) => (
          <option key={verse} value={verse}>
            Verse {verse}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VerseSelector; 
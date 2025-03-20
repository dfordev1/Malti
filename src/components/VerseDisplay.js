import React from 'react';

function VerseDisplay({ quranData, selectedSurah, selectedVerse }) {
  if (!selectedSurah || !selectedVerse) {
    return (
      <main className="content">
        <div className="verse-text">Please select a surah and verse to display.</div>
      </main>
    );
  }

  const verse = quranData[selectedSurah][selectedVerse];

  return (
    <main className="content">
      <h2 className="surah-name">{selectedSurah}</h2>
      <div className="verse-text">
        {verse}
        <span className="verse-number">{selectedVerse}</span>
      </div>
    </main>
  );
}

export default VerseDisplay; 
import styles from '../styles/VerseSelector.module.css';

export default function VerseSelector({ quranData, selectedSurah, selectedVerse, onSurahChange, onVerseChange }) {
  // Ensure quranData is not null/undefined and is an object
  const validQuranData = quranData && typeof quranData === 'object' ? quranData : {};
  
  const surahs = Object.keys(validQuranData);
  const verses = selectedSurah && validQuranData[selectedSurah] 
    ? Object.keys(validQuranData[selectedSurah]) 
    : [];

  return (
    <div className={styles.verseSelector}>
      <select
        value={selectedSurah || ''}
        onChange={(e) => onSurahChange(e.target.value)}
        aria-label="Select Surah"
        className={styles.select}
      >
        <option value="" disabled>Select Surah</option>
        {surahs.length > 0 ? (
          surahs.map((surah) => (
            <option key={surah} value={surah}>
              {surah}
            </option>
          ))
        ) : (
          <option value="" disabled>No surahs available</option>
        )}
      </select>
      <select
        value={selectedVerse || ''}
        onChange={(e) => onVerseChange(e.target.value)}
        disabled={!selectedSurah || verses.length === 0}
        aria-label="Select Verse"
        className={styles.select}
      >
        <option value="" disabled>Select Verse</option>
        {verses.length > 0 ? (
          verses.map((verse) => (
            <option key={verse} value={verse}>
              Verse {verse}
            </option>
          ))
        ) : (
          <option value="" disabled>No verses available</option>
        )}
      </select>
    </div>
  );
} 
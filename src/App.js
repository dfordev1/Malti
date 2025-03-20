import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VerseSelector from './components/VerseSelector';
import VerseDisplay from './components/VerseDisplay';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [quranData, setQuranData] = useState({});
  const [selectedSurah, setSelectedSurah] = useState('');
  const [selectedVerse, setSelectedVerse] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/quran.json');
        if (!response.ok) throw new Error('Failed to fetch Quran data.');
        const data = await response.json();
        setQuranData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSurahChange = (surah) => {
    setSelectedSurah(surah);
    setSelectedVerse('');
  };

  const handleVerseChange = (verse) => {
    setSelectedVerse(verse);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="App">
      <Header />
      <VerseSelector
        quranData={quranData}
        selectedSurah={selectedSurah}
        selectedVerse={selectedVerse}
        onSurahChange={handleSurahChange}
        onVerseChange={handleVerseChange}
      />
      <VerseDisplay
        quranData={quranData}
        selectedSurah={selectedSurah}
        selectedVerse={selectedVerse}
      />
      <Footer />
    </div>
  );
}

export default App; 
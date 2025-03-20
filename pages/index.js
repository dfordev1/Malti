import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Verse from '../components/Verse';
import styles from '../styles/Home.module.css';
import { useFontSize } from '../context/FontSizeContext';

export default function Home() {
  const [quranData, setQuranData] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState('1');
  const [selectedVerse, setSelectedVerse] = useState('1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { fontSize } = useFontSize();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch('/api/quran')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(response => {
        if (response && response.data) {
          setQuranData(response.data);
        } else {
          console.warn('Unexpected API response structure', response);
          setQuranData({
            1: {
              name: 'Al-Fatiha',
              verses: {
                1: { translation: "Fil-isem ta' Allah, Ir-Raħman, Ir-Raħim" },
                2: { translation: "Il-ħamd kollu lil Allah, is-Sid tal-għolja" },
                3: { translation: "Ir-Raħman, Ir-Raħim" },
                4: { translation: "Sid il-Jum tal-Ħaqq" },
                5: { translation: "Lilek biss naduraw u lilek biss nitolbu l-għajnuna" },
                6: { translation: "Mexxina fit-triq id-dritta" },
                7: { translation: "It-triq ta' dawk li Inti għamilt grazzja magħhom, mhux ta' dawk li jinsabu fil-korla u lanqas ta' dawk li jiżbaljaw" }
              }
            }
          });
          setError('Invalid data structure received from API. Using fallback data.');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading Quran data:', err);
        setError('Failed to load Quran data. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  const handleSurahChange = (surah) => {
    setSelectedSurah(surah);
    if (quranData?.[surah]?.verses) {
      const verses = Object.keys(quranData[surah].verses).sort((a, b) => Number(a) - Number(b));
      if (verses.length > 0) {
        setSelectedVerse(verses[0]);
      }
    }
  };

  const handleVerseChange = (verse) => {
    setSelectedVerse(verse);
  };

  const surahList = quranData ? Object.entries(quranData).map(([id, surah]) => ({
    id: id.toString(),
    name: `${id}. ${surah.name}`
  })).sort((a, b) => Number(a.id) - Number(b.id)) : [];

  const currentSurah = quranData?.[selectedSurah];
  const verses = currentSurah?.verses ? 
    Object.entries(currentSurah.verses)
      .map(([number, verse]) => ({
        number,
        text: verse.translation
      }))
      .sort((a, b) => Number(a.number) - Number(b.number)) 
    : [];

  const hasPrevSurah = Number(selectedSurah) > 1;
  const hasNextSurah = Number(selectedSurah) < Object.keys(quranData || {}).length;

  const handlePrevSurah = () => {
    if (hasPrevSurah) {
      const prevSurah = (Number(selectedSurah) - 1).toString();
      handleSurahChange(prevSurah);
    }
  };

  const handleNextSurah = () => {
    if (hasNextSurah) {
      const nextSurah = (Number(selectedSurah) + 1).toString();
      handleSurahChange(nextSurah);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{currentSurah ? `Surah ${currentSurah.name} - Il-Quran bil-Malti` : 'Il-Quran bil-Malti'}</title>
        <meta name="description" content={
          currentSurah 
            ? `Aqra Surah ${currentSurah.name} bil-Malti. ${currentSurah.englishName} - Traduzzjoni tal-Quran bil-Malti.`
            : 'Il-Quran bil-Malti - Traduzzjoni tal-Quran bil-Malti. Aqra u isma l-Quran bil-Malti.'
        } />
        <meta property="og:title" content={currentSurah ? `Surah ${currentSurah.name} - Il-Quran bil-Malti` : 'Il-Quran bil-Malti'} />
        <meta property="og:description" content={
          currentSurah 
            ? `Aqra Surah ${currentSurah.name} bil-Malti. ${currentSurah.englishName} - Traduzzjoni tal-Quran bil-Malti.`
            : 'Il-Quran bil-Malti - Traduzzjoni tal-Quran bil-Malti. Aqra u isma l-Quran bil-Malti.'
        } />
        <link rel="canonical" href={`https://malteseversion.com${currentSurah ? `/surah/${currentSurah.name.toLowerCase()}` : ''}`} />
      </Head>

      <Header 
        surahs={surahList} 
        onSurahChange={handleSurahChange}
        selectedSurah={selectedSurah}
      />

      <main className={styles.main}>
        {loading ? (
          <div className={styles.loading}>Qed jillowdja...</div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : currentSurah ? (
          <div className={styles.verseContainer}>
            <div className={styles.verseHeader}>
              <h1>Surah {currentSurah.name}</h1>
              <h2>{currentSurah.englishName}</h2>
            </div>
            <div className={styles.verseContent}>
              {verses.map((verse) => (
                <Verse key={verse.number} number={verse.number} text={verse.text} />
              ))}
            </div>
            <div className={styles.navigation}>
              <button
                className={styles.navButton}
                onClick={handlePrevSurah}
                disabled={!hasPrevSurah}
              >
                ← Surah ta' Qabel
              </button>
              <button
                className={styles.navButton}
                onClick={handleNextSurah}
                disabled={!hasNextSurah}
              >
                Surah li Jmiss →
              </button>
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
} 
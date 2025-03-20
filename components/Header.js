import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { MagnifyingGlassIcon, SunIcon, MoonIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useFontSize } from '../context/FontSizeContext';
import { useTheme } from '../context/ThemeContext';

export default function Header({ surahs = [], onSurahChange, selectedSurah }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { fontSize, setFontSize } = useFontSize();
  const { theme, toggleTheme } = useTheme();

  const handleSurahChange = (e) => {
    const value = e.target.value;
    if (value && onSurahChange) {
      onSurahChange(value);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFontSizeChange = (direction) => {
    const sizes = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(fontSize);
    let newIndex;
    
    if (direction === 'increase' && currentIndex < sizes.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'decrease' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else {
      return;
    }
    
    setFontSize(sizes[newIndex]);
  };

  const showSurahSelector = surahs && surahs.length > 0;
  const filteredSurahs = showSurahSelector ? surahs.filter(surah => 
    surah.name.toLowerCase().includes(searchTerm)
  ) : [];

  return (
    <header className={`${styles.headerWrapper} ${theme === 'dark' ? styles.darkMode : ''}`}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logoTitle}>
            <span className={styles.logoText}>MalteseVersion</span>
          </Link>

          {showSurahSelector && (
            <div className={styles.rightSection}>
              <div className={styles.searchContainer}>
                <MagnifyingGlassIcon className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Fittex Surah..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className={styles.searchInput}
                />
              </div>

              <Link href="/app" className={styles.getAppBtn}>
                Niżżel l-App
              </Link>
            </div>
          )}
        </div>
      </div>

      {showSurahSelector ? (
        <div className={styles.selectionBar}>
          <div className={styles.selectionContent}>
            <div className={styles.dropdowns}>
              <select 
                value={selectedSurah || ''} 
                onChange={handleSurahChange}
                className={styles.surahSelect}
              >
                {filteredSurahs.map((surah) => (
                  <option key={surah.id} value={surah.id}>
                    {surah.name}
                  </option>
                ))}
              </select>

              <select 
                className={styles.verseSelect}
                defaultValue="maltese"
              >
                <option value="maltese">Malti</option>
              </select>
            </div>

            <div className={styles.tools}>
              <button 
                className={styles.toolButton}
                onClick={() => handleFontSizeChange('decrease')}
                title="Naqqas id-Daqs tat-Test"
              >
                <MinusIcon className={styles.toolIcon} />
              </button>
              <button 
                className={styles.toolButton}
                onClick={() => handleFontSizeChange('increase')}
                title="Żid id-Daqs tat-Test"
              >
                <PlusIcon className={styles.toolIcon} />
              </button>
              <button 
                className={styles.toolButton}
                onClick={toggleTheme}
                title={theme === 'dark' ? "Modalità tal-Jum" : "Modalità tal-Lejl"}
              >
                {theme === 'dark' ? (
                  <SunIcon className={styles.toolIcon} />
                ) : (
                  <MoonIcon className={styles.toolIcon} />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.simpleBar}>
          <div className={styles.simpleContent}>
            <div className={styles.tools}>
              <button 
                className={styles.toolButton}
                onClick={() => handleFontSizeChange('decrease')}
                title="Naqqas id-Daqs tat-Test"
              >
                <MinusIcon className={styles.toolIcon} />
              </button>
              <button 
                className={styles.toolButton}
                onClick={() => handleFontSizeChange('increase')}
                title="Żid id-Daqs tat-Test"
              >
                <PlusIcon className={styles.toolIcon} />
              </button>
              <button 
                className={styles.toolButton}
                onClick={toggleTheme}
                title={theme === 'dark' ? "Modalità tal-Jum" : "Modalità tal-Lejl"}
              >
                {theme === 'dark' ? (
                  <SunIcon className={styles.toolIcon} />
                ) : (
                  <MoonIcon className={styles.toolIcon} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
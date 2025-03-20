import styles from '../styles/Home.module.css';

export default function Verse({ number, text }) {
  return (
    <div className={styles.verse}>
      <span className={styles.verseNumber}>{number}</span>
      <span className={styles.verseText}>{text}</span>
    </div>
  );
} 
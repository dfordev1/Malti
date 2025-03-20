import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href="/privacy">Politika tal-Privatezza</Link>
          <Link href="/terms">Termini tas-Servizz</Link>
          <Link href="/about">Dwar</Link>
        </div>
        <div className={styles.social}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Instagram
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            X
          </a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} MalteseVersion. Id-drittijiet kollha riservati.
        </div>
      </div>
    </footer>
  );
} 
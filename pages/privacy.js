import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Politika tal-Privatezza - MalteseVersion</title>
        <meta name="description" content="Politika tal-Privatezza għal MalteseVersion" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Politika tal-Privatezza</h1>
          
          <section>
            <h2>1. Ġbir ta' Informazzjoni</h2>
            <p>Aħna niġbru biss l-informazzjoni meħtieġa biex nipprovdu s-servizz tagħna. Dan jinkludi:</p>
            <ul>
              <li>Informazzjoni bażika dwar l-użu tas-sit</li>
              <li>Preferenzi tal-utent (bħal daqs tat-test u tema)</li>
            </ul>
          </section>

          <section>
            <h2>2. Użu tal-Informazzjoni</h2>
            <p>L-informazzjoni miġbura tintuża biss biex:</p>
            <ul>
              <li>Intejbu s-servizz tagħna</li>
              <li>Nippersonalizzaw l-esperjenza tiegħek</li>
              <li>Nanalizzaw kif jintuża s-sit</li>
            </ul>
          </section>

          <section>
            <h2>3. Cookies</h2>
            <p>Nużaw cookies biex naħżnu l-preferenzi tiegħek bħal:</p>
            <ul>
              <li>Tema tad-dawl/dlam</li>
              <li>Daqs tat-test</li>
              <li>L-aħħar Surah li qrajt</li>
            </ul>
          </section>

          <section>
            <h2>4. Kuntatt</h2>
            <p>Jekk għandek xi mistoqsijiet dwar il-politika tal-privatezza tagħna, jekk jogħġbok ikkuntattjana.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
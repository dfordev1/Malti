import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwar - MalteseVersion</title>
        <meta name="description" content="Dwar il-proġett MalteseVersion" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Dwar MalteseVersion</h1>
          
          <section>
            <h2>Il-Missjoni Tagħna</h2>
            <p>MalteseVersion għandha l-għan li tagħmel il-Quran aċċessibbli għall-poplu Malti bil-lingwa tagħhom stess. Aħna nemmnu li kulħadd għandu jkollu aċċess għal traduzzjoni ta' kwalità għolja tal-Quran bil-Malti.</p>
          </section>

          <section>
            <h2>Il-Proġett</h2>
            <p>Dan il-proġett huwa sforz kontinwu biex:</p>
            <ul>
              <li>Nipprovdu traduzzjoni preċiża u affidabbli</li>
              <li>Noħolqu esperjenza ta' qari faċli u moderna</li>
              <li>Nagħmlu l-Quran aċċessibbli għal kulħadd</li>
            </ul>
          </section>

          <section>
            <h2>Karatteristiċi</h2>
            <p>L-applikazzjoni tagħna toffri:</p>
            <ul>
              <li>Traduzzjoni bil-Malti tal-Quran sħiħ</li>
              <li>Interfaċċja faċli biex tintuża</li>
              <li>Modalità tad-dawl u dlam</li>
              <li>Kontroll tad-daqs tat-test</li>
              <li>Funzjoni ta' tfittxija</li>
            </ul>
          </section>

          <section>
            <h2>Kuntatt</h2>
            <p>Għal mistoqsijiet jew suġġerimenti, jekk jogħġbok ikkuntattjana permezz tal-midja soċjali tagħna.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
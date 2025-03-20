import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Page.module.css';

export default function Terms() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Termini tas-Servizz - MalteseVersion</title>
        <meta name="description" content="Termini tas-Servizz għal MalteseVersion" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Termini tas-Servizz</h1>
          
          <section>
            <h2>1. Aċċettazzjoni tat-Termini</h2>
            <p>Meta tuża s-servizz tagħna, inti taqbel li timxi ma' dawn it-termini. Jekk ma taqbilx ma' xi parti minn dawn it-termini, jekk jogħġbok tużax is-servizz tagħna.</p>
          </section>

          <section>
            <h2>2. Użu tas-Servizz</h2>
            <p>Is-servizz tagħna huwa disponibbli għall-użu personali u mhux kummerċjali. Int taqbel li:</p>
            <ul>
              <li>Tuża s-servizz b'mod responsabbli</li>
              <li>Ma tikkopjax jew tqassam il-kontenut mingħajr permess</li>
              <li>Ma tużax is-servizz għal skopijiet illegali</li>
            </ul>
          </section>

          <section>
            <h2>3. Drittijiet tal-Proprjetà Intellettwali</h2>
            <p>Il-kontenut kollu fuq is-sit huwa protett bid-drittijiet tal-awtur. Ma tistax:</p>
            <ul>
              <li>Tikkopja jew tqassam il-kontenut mingħajr permess</li>
              <li>Tuża l-kontenut għal skopijiet kummerċjali</li>
              <li>Timmodifika jew tadatta l-kontenut</li>
            </ul>
          </section>

          <section>
            <h2>4. Limitazzjoni tar-Responsabbiltà</h2>
            <p>Is-servizz tagħna huwa pprovdut "kif inhu" mingħajr ebda garanzija. Ma nistgħux niggarantixxu li s-servizz ikun dejjem disponibbli jew ħieles mill-iżbalji.</p>
          </section>

          <section>
            <h2>5. Tibdil fit-Termini</h2>
            <p>Nistgħu naġġornaw dawn it-termini minn żmien għal żmien. Huwa r-responsabbiltà tiegħek li tiċċekkja għal aġġornamenti.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Head from 'next/head';
import About from '../components/About';
import Skills from '../components/Skills';







export default function Home() {
  return (
    <div>
      <Head>
        <title>Front-End</title>

        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}


import Main from '../components/Main';
import Head from 'next/head';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';







export default function Home() {
  return (
    <div>
      <Head>
        <title>Front-End</title>

        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <Main />
      <Skills />
      <About />

      <Projects />
      <Contact />
    </div>
  );
}

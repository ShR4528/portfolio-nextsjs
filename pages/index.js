import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Front-End</title>

        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
    </div>
  );
}

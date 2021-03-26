import Head from 'next/head';
// components
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp | Home Cooked</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  );
}

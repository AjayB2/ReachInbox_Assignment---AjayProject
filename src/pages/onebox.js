import Head from 'next/head';
import Header from '../components/Header';
import OneBox from '../components/OneBox';

function OneBoxPage() {
  return (
    <div>
      <Head>
        <title>OneBox Page</title>
      </Head>
      <Header />
      <h1>OneBox</h1>
      <OneBox />
    </div>
  );
}

export default OneBoxPage;
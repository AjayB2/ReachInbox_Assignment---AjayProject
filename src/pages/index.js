import Head from 'next/head';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}

export default HomePage;
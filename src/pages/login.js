import Head from 'next/head';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';

function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', username, password);
  };

  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default LoginPage;
import InputField from './InputField';

const MyForm = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <InputField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="example@example.com"
      />
    </form>
  );
};
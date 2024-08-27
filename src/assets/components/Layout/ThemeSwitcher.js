// ThemeSwitcher.js
import React from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <div>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
};

export default ThemeSwitcher;
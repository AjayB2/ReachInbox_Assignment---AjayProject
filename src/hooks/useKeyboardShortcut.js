import { useState, useEffect } from 'react';

const useKeyboardShortcut = (shortcut, callback) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === shortcut) {
        setPressed(true);
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcut, callback]);

  return pressed;
};

export default useKeyboardShortcut;
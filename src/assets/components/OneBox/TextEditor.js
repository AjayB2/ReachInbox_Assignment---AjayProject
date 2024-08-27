// TextEditor.js
import React from 'react';

const TextEditor = () => {
  const [text, setText] = React.useState('');

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default TextEditor;
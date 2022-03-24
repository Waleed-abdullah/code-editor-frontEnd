import { useState } from 'react';
import Editor from '@monaco-editor/react';

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: '//Hello',
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: 'h1 {}',
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '<p></p>',
  },
};

// We can receive the data for a file from the server in a json like object and render it

function MonacoEditor() {
  const [fileName, setFileName] = useState('script.js');

  const file = files[fileName];

  // use this to get the current value of the editor
  const handleEditorChange = (value, event) => {
    console.log(value);
  };

  return (
    <div
      style={{
        width: '50%',
        'margin-right': 'auto',
        'margin-left': 'auto',
        height: '50%',
      }}
    >
      <button
        disabled={fileName === 'script.js'}
        onClick={() => setFileName('script.js')}
      >
        script.js
      </button>
      <button
        disabled={fileName === 'style.css'}
        onClick={() => setFileName('style.css')}
      >
        style.css
      </button>
      <button
        disabled={fileName === 'index.html'}
        onClick={() => setFileName('index.html')}
      >
        index.html
      </button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default MonacoEditor;

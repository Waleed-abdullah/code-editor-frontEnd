import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const files = {
  JS: {
    name: 'script.js',
    language: 'javascript',
    initialValue: 'console.log("Hello World");',
  },
  CSS: {
    name: 'style.css',
    language: 'css',
    initialValue: 'h1 {}',
  },
  HTML: {
    name: 'index.html',
    language: 'html',
    initialValue: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body></body>
    </html>
`,
  },
};

// We can receive the data for a file from the server in a json like object and render it

const MonacoEditor = () => {
  const [fileName, setFileName] = useState('JS');

  const file = files[fileName];

  const [js, setJs] = useState(files['JS']['initialValue']);
  const [css, setCss] = useState(files['CSS']['initialValue']);
  const [html, setHtml] = useState(files['HTML']['initialValue']);
  const [srcDoc, setSrcDoc] = useState(``);

  // use this to get the current value of the editor
  const handleEditorChange = (value, event) => {
    if (fileName === 'JS') setJs(value);
    else if (fileName === 'HTML') setHtml(value);
    else setCss(value);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 250);
    return () => clearTimeout(timeOut);
  }, [js, css, html]);

  return (
    <div
      style={{
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        height: '50%',
      }}
    >
      <button disabled={fileName === 'JS'} onClick={() => setFileName('JS')}>
        script.js
      </button>
      <button disabled={fileName === 'CSS'} onClick={() => setFileName('CSS')}>
        style.css
      </button>
      <button
        disabled={fileName === 'HTML'}
        onClick={() => setFileName('HTML')}
      >
        index.html
      </button>

      <Editor
        theme="vs-dark"
        height="50vh"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.initialValue}
        onChange={handleEditorChange}
      />

      <div style={{ border: '10px solid black' }}>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default MonacoEditor;

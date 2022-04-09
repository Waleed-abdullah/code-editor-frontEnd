import React, { useEffect, useState } from 'react'
import Editor, {useMonaco} from '@monaco-editor/react';
import { getFileContent, updateFile } from '../../services/fileExplorer/apiCalls';
//import themelist from "monaco-themes/themes/themelist.json";

// const themes = Object.entries(themelist).map(([key, theme]) => {
//     return { label: theme, value: key };
// });

const MonacoEditor = ({openFile, setSaved, saved}) => {
    //const [theme, setTheme] = useState('vs-dark')
    const [fileContent, setFileContent] = useState('')
    //const monaco = useMonaco()

    useEffect(() => {
        if (openFile !== ''){
            fetchContent() 
        }
    }, [openFile])

    // useEffect(() => {
    //     if (!monaco) return;
    
    //     const loadThemes = async () => {
    //       for (const theme of themes) {
    //         try {
    //           const tmTheme = await import(
    //             `monaco-themes/themes/${theme.label}.json`
    //           );
    //           monaco.editor.defineTheme(theme.value, tmTheme);
    //         } catch (e) {
    //           console.log("Error loading theme", theme.label);
    //           console.log(e);
    //         }
    //       }
    //     };
    
    //     loadThemes();
    //     setTheme('monokai')
    //   }, [monaco]);

    const fetchContent = async () => {
        const data = await getFileContent('abd', 'TestDir', openFile)
        setFileContent(data)
        setSaved(!saved)
    }

    const handleEditorChange = async (value, event) => {
        if (event.changes[0].text === '\r\n' || event.changes[0].text === ""){
            console.log('Updating')
            await updateFile(value, 'abd', 'TestDir', openFile)
            setSaved(!saved)
        }
    }

  return (
    <>
    <div style={{width: '50%', height: '92%'}}>
        <div className='w-full' style={{backgroundColor: 'rgb(21,21,21,1)'}}>
            <div className='pl-2 pt-1 pb-1 w-1/5 font-i' 
            style={{
            borderBottomColor: 'rgb(108, 199, 246)', borderWidth: '1px', 
            borderLeftColor: 'rgb(52, 52, 52)', borderRightColor: 'rgb(52, 52, 52)', 
            borderTopColor: 'rgb(52, 52, 52)'
            }}>
            <i>{openFile.split('/')[openFile.split('/').length-1]}</i></div>
        </div>

        <Editor
        height="100%"
        path={openFile}
        defaultValue={fileContent}
        value={fileContent}
        theme='vs-dark'
        onChange={handleEditorChange}
        />
    </div>
    </>
  )
}

export default MonacoEditor
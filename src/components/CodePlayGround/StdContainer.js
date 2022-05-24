import React, { useState } from 'react'
import Stderr from './Stderr'
import Stdin from './Stdin'
import Stdout from './Stdout'
import { runCode } from '../../services/runCode/apiCalls'

const StdContainer = ({language, fileContent}) => {
    const [stdin, setStdin] = useState('')
    const [stdout, setStdout] = useState('')
    const [stderr, setStderr] = useState('')
    const [clicked, setClicked] = useState([true, false, false])

    const handleRunClick = async () => {
        const {stdout, stderr, error} = await runCode(fileContent, language, stdin)
        setStdout(stdout)
        setStderr(stderr)
    }

    return (
        <>
            <div className='w-full flex justify-start'
            style={{borderTopWidth: '1px', borderTopColor: 'rgb(108, 199, 246)'}}>
                <button className={`mt-1 ml-5  hover:text-blue-400 ${clicked[0] ? 'border-b-2 border-blue-400' : null}`} onClick={() => setClicked([true, false, false])}>Stdin</button>
                <button className={`mt-1 ml-10  hover:text-blue-400 ${clicked[1] ? 'border-b-2 border-blue-400' : null}`} onClick={() => setClicked([false, true, false])}>Stdout</button>
                <button className={`mt-1 ml-10  hover:text-blue-400 ${clicked[2] ? 'border-b-2 border-blue-400' : null}`} onClick={() => setClicked([false, false, true])}>Stderr</button>

                <button className='mt-1 ml-10 px-4 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-800'
                onClick={handleRunClick}>Run</button>
            </div>

            {clicked[0] ? <Stdin stdin={stdin} setStdin={setStdin}/> : clicked[1] ? <Stdout stdout={stdout}/> : <Stderr stderr={stderr}/>}
        </>
    )
}

export default StdContainer
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { EditorController } from './editor-controller';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
    ssr: false,
});

export default function Editor() {
    const [language, setLanguage] = useState('javascript' as string);
    return (
        <>
            <div className="my-3 ml-28 flex flex-row">
                <MonacoEditor
                    height="80vh"
                    width={window.innerWidth - 300}
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    language={language}
                    className=""
                    theme="vs-dark"
                />
                <EditorController />
            </div>
        </>
    );
}

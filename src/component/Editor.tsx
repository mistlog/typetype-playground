import React, { useRef, useState } from 'react';
import { mergeStyleSets } from '@fluentui/merge-styles';
import MonacoEditor from '@monaco-editor/react';
import { monaco } from '@monaco-editor/react';
import * as debounce from "lodash.debounce";
import { transform } from "@mistlog/typetype";

monaco.init()
    .then(monaco => {

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: true
        });

    })
    .catch(error => console.error('An error occurred during initialization of Monaco: ', error));

export interface IEditorProps {
    defaultCode?: string
}
export function Editor(props: IEditorProps) {
    const { defaultCode } = props;
    const editorRef = useRef<any>();
    const [output, setOutput] = useState("");

    function run() {
        const code = editorRef.current.getValue();

        try {
            const result = transform(code, { debug: true }).code;
            setOutput(result);
        } catch (error) {
            delete error.stack;
            const output = `message:\n${error.message}\n\nlocation:\n${JSON.stringify(error.location, null, 4)}\n\n${error.backtrace}`;
            setOutput(output);
        }
    }

    function handleEditorDidMount(_, editor) {
        editorRef.current = editor;
        run();
        editorRef.current.onDidChangeModelContent(debounce((event: any) => {
            run();
        }, 1000));
    }

    const options = {
        minimap: { enabled: false },
        scrollbar: { useShadows: false }
    };

    return (
        <div className={classNames.container} >
            <MonacoEditor height="100%" width="50%" language="typescript" options={options} editorDidMount={handleEditorDidMount} value={defaultCode} />
            <div style={{ width: "50%" }}>
                <MonacoEditor height="100%" width="100%" language="typescript" options={{
                    ...options, readOnly: true,
                    wordWrap: 'wordWrapColumn',
                    wordWrapColumn: 80,
                }} value={output} />
            </div>
        </div>
    )
}

/**
 * 
 */
const classNames = mergeStyleSets({
    container: {
        height: "100%",
        display: "flex"
    }
})
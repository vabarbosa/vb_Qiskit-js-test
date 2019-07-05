import React from 'react';
import { render } from 'react-dom';
import {UnControlled   as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/quantum/quantum';
import { Qiskit } from './QiskitJs'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/javascript/javascript.js');


render(
    <CodeMirror
        value= ''
        options={{
            mode: 'quantum',
            theme: 'material',
            lineNumbers: true
        }}
        // onBeforeChange={(editor, data, value) => {
        //     this.setState({value});
        // }}
        onChange={(editor, data, value) => {
            console.log({value})
            console.log(Qiskit(value))
        }}
    />,

    document.getElementById('root')
);

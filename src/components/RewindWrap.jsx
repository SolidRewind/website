import { createSignal, getOwner } from 'solid-js';

import { CodeMirror } from "@solid-codemirror/codemirror";
import { basicSetup } from "codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

function RewindWrapper() {

  const [rwCodeStage, setRwCodeStage] = createSignal(0);

  const steps = [
    [`import Rewind from 'solid-rewind';

    render( () => {
        <App />
    }, document.getElementById('root'));
    

    `,10],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <
        <App />
    }, document.getElementById('root'));

    `,1],



    [`import Rewind from 'solid-rewind';

    render( () => {
        <R
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Re
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rew
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewi
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewin
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind
        <App />
    }, document.getElementById('root'));

    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
        <App />
    }, document.getElementById('root'));

    `,2],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
    }, document.getElementById('root'));

    `,2],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        <
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </R
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Re
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Rew
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Rewi
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Rewin
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Rewind
    }, document.getElementById('root'));
    `,1],


    [`import Rewind from 'solid-rewind';

    render( () => {
        <Rewind>
          <App />
        </Rewind>
    }, document.getElementById('root'));
    `,18],
  ];
  

  setTimeout(advanceCode, 400);

  function advanceCode() {
    let next = rwCodeStage() + 1;
    if (next >= steps.length) {
      next = 0;
    }
    setRwCodeStage(next);

    setTimeout(advanceCode, steps[rwCodeStage()][1] * 100);
  }





  return (
    <CodeMirror id='rewindWrapper' extensions={[basicSetup, python()]} theme={oneDark} showLineNumbers={true} readOnly={true} wrapLine={true} aria-label="installation_textbox" aria-labelledby='rewindwrapper' value={steps[rwCodeStage()][0] } />      
  );
}

export default RewindWrapper;

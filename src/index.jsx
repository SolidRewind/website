/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router'

import './index.css';
import App from './App';
// import Rewind from 'solid-rewind';

render(() => (
    // <Rewind>
      <Router>
        <App />
      </Router>
    // </Rewind>
  ), 
  document.getElementById('root')
);

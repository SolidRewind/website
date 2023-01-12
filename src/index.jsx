/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, pathIntegration } from '@solidjs/router'

import './index.css';
import App from './App';
import Rewind from 'solid-rewind';

render(() => (
  <Rewind runInProduction={true}>

      <Router integration={pathIntegration()}>
        <App />
      </Router>
    </Rewind>
  ), 
  document.getElementById('root')
);

/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, pathIntegration } from '@solidjs/router'

import './index.css';
import App from './App';

render(() => (
      <Router integration={pathIntegration()}>
        <App />
      </Router>
  ), 
  document.getElementById('root')
);

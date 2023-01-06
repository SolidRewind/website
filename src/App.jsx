import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home';
import Installation from './pages/DocsPages/Installation'
import Basicusage from './pages/DocsPages/BasicUsage';
import Coreconcepts from './pages/DocsPages/CoreConcepts';
import Todo from './Todo';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/docs" component={Installation}/>
          <Route path="/docs/installation" component={Installation} /> 
          <Route path="/demo" component={Todo} />
        <Route path="/docs/basicusage" component={Basicusage} /> 
        <Route path="/docs/coreconcepts" component={Coreconcepts} /> 
      </Routes>
      
    </div>
  );
}

export default App;

import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home';
import Installation from './pages/DocsPages/Installation'
import Basicusage from './pages/DocsPages/Basicusage';
import Coreconcepts from './pages/DocsPages/CoreConcepts';
import Demo from './demo/Demo'

function App() {

  console.log(`%c mode: ${ process.env.NODE_ENV }`, `color:salmon; font-weight: bold`);

  return (
    <div >

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/docs" component={Installation}/>
        <Route path="/docs/installation" component={Installation} /> 
        <Route path="/demo" component={Demo} />
        <Route path="/docs/basicusage" component={Basicusage} /> 
        <Route path="/docs/coreconcepts" component={Coreconcepts} /> 
      </Routes>
      
    </div>
  );
}

export default App;

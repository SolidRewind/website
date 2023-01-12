import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home';
import DemoWrapper from './demo/DemoWrapper'
import Iframe from './demo/Iframe';
import Rewind from 'solid-rewind';

function App() {

  console.log(`%c mode: ${ process.env.NODE_ENV }`, `color:salmon; font-weight: bold`);

  return (
    <div >

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/demo" component={DemoWrapper} />
        <Route path="/Iframe" component={Iframe} />
      </Routes>
      
    </div>
  );
}

export default App;

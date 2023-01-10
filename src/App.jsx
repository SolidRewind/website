import { Routes, Route } from '@solidjs/router'

import Home from './pages/Home';
import Demo from './demo/Demo'

function App() {

  console.log(`%c mode: ${ process.env.NODE_ENV }`, `color:salmon; font-weight: bold`);

  return (
    <div >

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/demo" component={Demo} />
      </Routes>
      
    </div>
  );
}

export default App;

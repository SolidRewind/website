import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import DocsNav from '../../components/DocsNav';
import Nav from '../../components/Nav';

function Installation() {


  return (
    <>
      <Nav mode='docs' />
      <DocsNav />
      <div class='docsContent'>
        
      </div>
      {/* <div>
        <div class="docMain">
         
          <main class ="installationPage">
            <h1>Installation</h1>
            <h3 class = 'installationLink'>Solid Rewind is available as an <a href="https://www.npmjs.com/package/solid-rewind">npm package</a></h3> 
            <h2>npm</h2>
            <h3>To install and save in your package.json dependencies, run the command below using npm:</h3>
            <div class ='installContainer'>
              <h4>npm install solid-rewind</h4>
              <button type = "image"  onClick={() => {navigator.clipboard.writeText('npm install solid-rewind')}}>Copy</button>
            </div>
            <h2>yarn</h2>
            <div class ='installContainer'>
              <h4>yarn add solid-rewind</h4>
              <button type = "image"  onClick={() => {navigator.clipboard.writeText('yarn add solid-rewind')}}>Copy</button>
            </div>
            <h3 class = 'installationLink'>After you've installed Rewind, head over to <a href="">Basic Usage</a> to see how to use the tool.</h3> 
          </main>
        </div>
        <footer class='docFooter'>
          <div class="docFooterList">
            <h1>Getting Started</h1>
            <ul class="docsUL">
              <li class = "docsNav"><a href='/docs/installation'>Installation</a></li>
              <li class = "docsNav"><a href='/docs/basicusage'>Basic Usage</a></li>
              <li class = "docsNav"><a href='/docs/coreconcepts'>Core Concepts</a></li>
            </ul>
          </div>
          <div class="docFooterList">
            <h1>Community</h1>
            <ul class="docsUL">
              <li class = "docsNav"><a href="">Blog</a></li>
              <li class = "docsNav"><a href="https://github.com/oslabs-beta/solid-rewind">Github</a></li>
            </ul>
          </div>
      </footer>
        
      </div> */}
      
    </>
  );
}

export default Installation;

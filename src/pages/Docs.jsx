
import { Routes, Route } from '@solidjs/router'
import '../style/docs-style.css'

function Docs() {
  return (
    <>
      <div>
        <div class="docMain">
          <nav class='sideNav'>
            <h1>Getting Started!</h1>
            <ul class="docsUL">
              <li class = "docsNav"><a href='/docs/installation'>Installation</a></li>
              <li class = "docsNav"><a href='/docs/basicusage'>Basic Usage</a></li>
              <li class = "docsNav"><a href='/docs/coreconcepts'>Core Concepts</a></li>
            </ul>
            <h1>Guides</h1>
            <ul class='docsUL'>
              <li class = "docsNav">TEST</li>
              <li class = "docsNav">TEST</li>
              <li class = "docsNav">TEST</li>
            </ul>
          </nav>
          <main class ="installationPage">
            <h1>this is installation Page</h1>
            <h3>Rewind is available as an <a href="">npm pakage</a></h3> 
            <h2>npm</h2>
            <h3>To install and save in your package.json dependencies, run the command below using npm:</h3>
            <h4>npm install rewind</h4>
            <h3>Or yarn:</h3>
            <h4>yarn add rewind</h4>
            <h3>After you've installed Rewind, head over to <a href="">Basic Usage</a> to see how to use the tool.</h3> 
          </main>
        </div>
        {/* <footer class='docFooter'>
          <div >
            <div>
              <h1>Getting Started</h1>
              <ul class="docsUL">
                <li class = "docsNav">Installation</li>
                <li class = "docsNav">Basic Usage</li>
                <li class = "docsNav">Core Concepts</li>
              </ul>
            </div>
            <div>
              <h1>Guides</h1>
              <ul class="docsUL">
                <li class = "docsNav">TEST</li>
                <li class = "docsNav">TEST</li>
                <li class = "docsNav">TEST</li>
              </ul>
            </div>
            <div>
              <h1>Community</h1>
              <ul class="docsUL">
                <li class = "docsNav">TEST</li>
                <li class = "docsNav">TEST</li>
                <li class = "docsNav">TEST</li>
              </ul>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}

export default Docs;
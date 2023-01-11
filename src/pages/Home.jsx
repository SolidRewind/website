import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import { createSignal, getOwner } from 'solid-js';
import logo from '../assets/solid-rewind-logo.svg';

import christian from '../assets/contributors/Christian.jpeg';
import robbie from '../assets/contributors/Robbie.jpeg';
import willem from '../assets/contributors/Willem.jpeg';
import json from '../assets/contributors/Jason.jpeg';

import topVideoImageBox from '../assets/video/top-video-box-img.jpg';
import topVideo from '../assets/video/top-video.mp4';
import featureTimeTrave from '../assets/video/feature-time-travel.mp4';
import featureCompTree from '../assets/video/feature-comp-tree.mp4';
import featureBoxImg from '../assets/video/feature-box-img.jpg'


import RewindWrapper from '../components/RewindWrap'

import Nav from '../components/Nav';
import Contributor from '../components/Contributor';


function Home() {

  const [currentVideo, setCurrentVideo] = createSignal(0)

  function copyNpm() {
    navigator.clipboard.writeText('npm i solid-rewind');
    document.getElementById('copyMesg').style.opacity = 1;
    setTimeout(hideMesg, 1400);
  }

  function hideMesg() {
    document.getElementById('copyMesg').style.opacity = 0;
  }

  return (
     <>

      <Nav />
      <header id='hero'>

        <div id='heroContent'>

          <img src={logo} class="logo" />

          <h1 id='heroTitle'>
            SOLID<br></br>
            <div id='rewind'>
              <div id='rewindBehind'>REWIND</div>
              <div id='rewindOver'>REWIND</div>
              <br></br>
            </div>
          </h1>
          
        </div>

        <h2 id='tagLine'>
          Solid Rewind: A Time Travel Debugger
        </h2>

      </header>

      {/* INTRO */}
      <section class='contentSection columnOnMobile'>
        <div class='oneThird mobileExpand'>
          <h3>
            Intro
          </h3>
          <p>
            Solid Rewind alows for Redux-like time-travel debugging and component-tree visualization in apps made with SoldJS. It's powerful, easy to use and install.
            <br></br><br></br>
            <br></br>
            > Learn more about <a href='http://www.solidjs.com' target='_blank'>SolidJS</a>
            <br></br>
          </p>
          {/* <button>GET STARTED</button> */}
        </div>

        <div class='twoThird mobileExpand'>
          <figure class='fullbox aboutImage'>
            
            <video id="background-video" autoplay loop muted poster={topVideoImageBox}>
              <source src={topVideo} type="video/mp4"></source>
            </video>
            {/* <img class='transparent' src={screenshot}></img> */}
          </figure>
        </div>
        
      </section>


      {/* INSTALLATION */}
      <section class='contentSection noPadding columnOnMobile' id='install'>
        <div class='oneHalf smallerPadding mobileExpand'>
          <h3>
            easy to install
          </h3>
        </div>
      
        <article class='oneHalf smallerPadding mobileExpand installInstructions'>
          1️. Install the npm package
          <div class='flex'>
            <div id='copyWindow' onclick={ copyNpm }>
              npm i solid-rewind
              <div id='copyBtnBox'>
                <div id='copyIcon'></div>
                <div id='copyMesg'>copied</div>
              </div>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          2️. Import Rewind. Wrap Rewind around the top-level component.

          <RewindWrapper />
          {/* <CodeMirror extensions={[basicSetup, python()]} theme={oneDark} showLineNumbers={true} readOnly={true} wrapLine={true} value="print()" /> */}

          <br></br><br></br><br></br><br></br>
          3. Use the Solid-Rewind Chrome Extension to debug your app.
          <br></br><br></br>
          &nbsp;&nbsp;👉&nbsp;&nbsp;Download the <a href='https://chrome.google.com/webstore/detail/solid-rewind/ejdinegdopmimnkbonknknhfmmcgcdoh' target='_blank'>Chrome Extension</a>.
        </article>

      </section>


      {/* FEATURES */}
      <section class='contentSection noPadding columnOnMobile'>
        <div class='oneThird rightBorder smallerPadding mobileExpand mobleNoPaddingBottom'>
          <h3>
            Features
          </h3>
          <options class='bigLink'>
            {(currentVideo() === 0) && <a onClick={()=>setCurrentVideo(0)} >• Time Travel</a>}
            {(currentVideo() !== 0) && <a onClick={()=>setCurrentVideo(0)} >Time Travel</a>}
            <br></br>
            {(currentVideo() === 1) && <a onClick={()=>setCurrentVideo(1)} >• Component Tree View</a>}
            {(currentVideo() !== 1) && <a onClick={()=>setCurrentVideo(1)} >Component Tree View</a>}
            {/* <br></br>
            {(currentVideo() === 2) && <a href='' onMouseOver={()=>setCurrentVideo(2)} >• ????</a>}
            {(currentVideo() !== 2) && <a href='' onMouseOver={()=>setCurrentVideo(2)} >????</a>} */}
          </options>
          <br></br><br></br>
          {(currentVideo() === 0) && <p>
            Use the Solid Rewind Chrome Extension to step through each state change of your SolidJS app.
          </p>}
          {(currentVideo() === 1) && <p>
            The Solid Rewind Chrome Extension is able to construct and visualize a component tree-view of your entire SolidJS app.
          </p>}
        </div>

        <div class='twoThird smallerPadding mobileExpand'>
          <figure class='fullbox aboutImage'>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk?frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" ></iframe> */}


            {(currentVideo() === 0) && 
              <video id="background-video" autoplay loop muted poster={featureBoxImg}>
                <source src={featureTimeTrave} type="video/mp4"></source>
              </video>
            }
            {(currentVideo() === 1) && 
              <video id="background-video" autoplay loop muted poster={featureBoxImg}>
                <source src={featureCompTree} type="video/mp4"></source>
              </video>
            }
            {/* {(currentVideo() === 2) && 
              <video id="background-video" autoplay loop muted poster={vidBox}>
                <source src={videoC} type="video/mp4"></source>
              </video>
            } */}

{/* || <img class='transparent' src={vidBox}></img> */}

            
          </figure>
        </div>
      </section>



      <section class='contentSection smallerPadding oneWhole' id='readmore'>
          <h3>
            Read More
          </h3>
          <p>☞<a>&nbsp;&nbsp;Medium - Intro To Solid Rewind</a></p>
          {/* <p>☞<a>&nbsp;&nbsp;Medium - How Solid Rewind works</a></p> */}
          <br></br>
      </section>


      <section class='contentSection smallerPadding oneWhole' id='team'>

          <h3>
            The Team
          </h3>
          {/* <p>
            Christian Catanese  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Robbie Gottlieb  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Willem Rosenthal  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Jason Moon  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a>
          </p> */}
          <div class='team'>
            <Contributor name='Christian Catanese' portrait={christian} linkedIn='https://www.linkedin.com/in/christian-catanese' gitHub='https://github.com/c-catanese' />
            <Contributor name='Robbie Gottlieb' portrait={robbie} linkedIn='https://www.linkedin.com/in/robbie-gottlieb/' gitHub='https://github.com/boblobblieb' />
            <Contributor name='Willem Rosenthal' portrait={willem} linkedIn='https://www.linkedin.com/in/willem-rosenthal/' gitHub='https://github.com/willemrosenthal' />
            <Contributor name='Jason Moon' portrait={json} linkedIn='https://www.linkedin.com/in/jason-joonsik-moon/' gitHub='https://github.com/Crescent0130' />
          </div>
          <br></br><br></br><br></br>
      </section>


      
      <footer id='footer' class='nav'>
          <div>© 2023</div>    <div>Follow on <a href='' target='_blank'>GitHub</a></div>
          {/* >Read about us on <a href='' target='_blank'>Medium</a> -  */}
      </footer>
     </>

  );
}

export default Home;

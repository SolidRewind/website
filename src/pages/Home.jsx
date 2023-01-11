import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import { createSignal, getOwner } from 'solid-js';
import logo from '../assets/solid-rewind-logo.svg';
import screenshot from '../assets/screenshots/screenshot-1.png';
import videoA from '../assets/video/video-a.mp4';
import videoB from '../assets/video/video-b.mp4';
import videoC from '../assets/video/video-c.mp4';
import vidBox from '../assets/video/video-box.jpg'
import christian from '../assets/contributors/Christian.jpeg';
import robbie from '../assets/contributors/Robbie.jpeg';
import willem from '../assets/contributors/Willem.jpeg';
import json from '../assets/contributors/Jason.jpeg';

import vidTimeTravelTopBox from '../assets/video/time-travel-new-box.jpg';
import vidTimeTravelTop from '../assets/video/time-travel-new.mp4';
import vidTimeTravel from '../assets/video/time-travel2.mp4';
import vidTreeView from '../assets/video/tree-view.mp4';


import RewindWrapper from '../components/RewindWrap'

// import { createCodeMirror } from 'solid-codemirror';
import { javascript } from "@codemirror/lang-javascript";

import { CodeMirror } from "@solid-codemirror/codemirror";
import { basicSetup } from "codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

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
            A description of what it does. How it works and why it’s so great. A few of the main features that are undeniably cool. 
            <br></br><br></br>
            And how easy it is to install.
          </p>
          <br></br><br></br>
          {/* <button>GET STARTED</button> */}
        </div>

        <div class='twoThird mobileExpand'>
          <figure class='fullbox aboutImage'>
            
            <video id="background-video" autoplay loop muted poster={vidTimeTravelTopBox}>
              <source src={vidTimeTravelTop} type="video/mp4"></source>
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
          Install the npm package
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
          Import Rewind. Wrap Rewind around the top-level component.

          <RewindWrapper />
          {/* <CodeMirror extensions={[basicSetup, python()]} theme={oneDark} showLineNumbers={true} readOnly={true} wrapLine={true} value="print()" /> */}

          <br></br><br></br><br></br><br></br>
          Use the Solid-Rewind Chrome Extension to debug your app.
          <br></br><br></br>
          👉&nbsp;&nbsp;Download <a href='https://chrome.google.com/webstore/detail/solid-rewind/ejdinegdopmimnkbonknknhfmmcgcdoh' target='_blank'>here</a>.
          <br></br><br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn more about <a href='http://www.solidjs.com' target='_blank'>SolidJS</a>
        </article>

      </section>


      {/* FEATURES */}
      <section class='contentSection noPadding columnOnMobile'>
        <div class='oneThird rightBorder smallerPadding mobileExpand mobleNoPaddingBottom'>
          <h3>
            Features
          </h3>
          <options class='bigLink'>
            {(currentVideo() === 0) && <a href='' onMouseOver={()=>setCurrentVideo(0)} >• Time Travel</a>}
            {(currentVideo() !== 0) && <a href='' onMouseOver={()=>setCurrentVideo(0)} >Time Travel</a>}
            <br></br>
            {(currentVideo() === 1) && <a href='' onMouseOver={()=>setCurrentVideo(1)} >• Component Tree View</a>}
            {(currentVideo() !== 1) && <a href='' onMouseOver={()=>setCurrentVideo(1)} >Component Tree View</a>}
            {/* <br></br>
            {(currentVideo() === 2) && <a href='' onMouseOver={()=>setCurrentVideo(2)} >• ????</a>}
            {(currentVideo() !== 2) && <a href='' onMouseOver={()=>setCurrentVideo(2)} >????</a>} */}
          </options>
        </div>

        <div class='twoThird smallerPadding mobileExpand'>
          <figure class='fullbox aboutImage'>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk?frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" ></iframe> */}


            {(currentVideo() === 0) && 
              <video id="background-video" autoplay loop muted poster={vidBox}>
                <source src={vidTimeTravel} type="video/mp4"></source>
              </video>
            }
            {(currentVideo() === 1) && 
              <video id="background-video" autoplay loop muted poster={vidBox}>
                <source src={vidTreeView} type="video/mp4"></source>
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
          <div>© 2023</div>    <div>Read about us on <a href='' target='_blank'>Medium</a> - Follow on <a href='' target='_blank'>GitHub</a></div>
      </footer>
     </>

  );
}

export default Home;

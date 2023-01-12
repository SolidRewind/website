import { createSignal } from "solid-js";

function Nav(props) {
  
  const [showMobileNav, setShowMobileNav] = createSignal(false);

  function scrollToId(target, start = 0) {
    let element = document.getElementById(target);
    let diff = (element.offsetTop - window.scrollY);
    let scrollTo = start + diff * 0.05;
    window.scroll(0, scrollTo);

    let body = document.body, html = document.documentElement;
    let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    let limit = height - window.innerHeight;
    
    if (((diff > 1 && Math.sign(diff) > 0) || (diff < 1 && Math.sign(diff) < 0)) && scrollTo < limit) setTimeout(scrollToId, 0 ,target, scrollTo);
  }
  

  window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset)
    y -= 500;
    y = y < 0 ? 0 : y;
    document.querySelector('.nav').style.backgroundColor = `rgba(0, 0, 0, ${y * 0.003})`;
  })

  return (
    <nav class={(props.mode==='docs' && 'docsTopNav')}>
      {showMobileNav() &&
        <nav class="mobileMenu">
            <div id="mobileMenuCloseBtn" onclick={() => setShowMobileNav(false)} >X</div>
            <div class='navItem'><a onclick={()=> {scrollToId('install', window.scrollY); setShowMobileNav(false)}} >Get Started</a></div>
            <div class='navItem'><a onclick={()=> {scrollToId('team', window.scrollY); setShowMobileNav(false)}} >Team</a></div>
            {/* <div class='navItem'><a href='/demo'>Demo</a></div> */}
            <div class='navItem'><a onclick={()=> {scrollToId('readmore', window.scrollY); setShowMobileNav(false)}} target='_blank'>Read More</a></div>
            <div class='navItem'><a href='https://github.com/oslabs-beta/solid-rewind' target='_blank'>Github</a></div>
        </nav>
      }
      <nav class='nav'>
        {/* href='/#install' */}
        { (props.mode!=='docs') && <div class='navItem leftNavItem'><a onclick={()=>scrollToId('install', window.scrollY)} >Get Started</a></div> }
        { (props.mode==='docs') && <div class='navItem leftNavItem'><a href="/" >Solid Rewind</a></div> }
        <div class='navSpacer'></div>
        <div class='navRightMenu'>
          <div class='navItem'><a onclick={()=>scrollToId('team', window.scrollY)} >Team</a></div>
          {/* <div class='navItem'><a href='/demo'>Demo</a></div> */}
          <div class='navItem'><a onclick={()=>scrollToId('readmore', window.scrollY)} target='_blank'>Read More</a></div>
          <div class='navItem'><a href='https://github.com/oslabs-beta/solid-rewind' target='_blank'>Github</a></div>
        </div>
        <div class="showOnMobile mobileMenuOpenBtn" onclick={() => setShowMobileNav(true)} >
          <svg viewBox="0 0 100 80" width="33" height="36">
            <rect width="100" height="7" style="fill:rgb(255,255,255);"></rect>
            <rect y="27" width="100" height="7" style="fill:rgb(255,255,255);"></rect>
            <rect y="54" width="100" height="7" style="fill:rgb(255,255,255);"></rect>
          </svg>
        </div>
      </nav>
    </nav>
  );
}

export default Nav;


function Nav(props) {
  
  function scrollToId(target, start = 0) {
    let element = document.getElementById(target);
    let diff = (element.offsetTop - window.scrollY);
    let scrollTo = start + diff * 0.05;
    window.scroll(0, scrollTo);
    if (diff > 10) setTimeout(scrollToId, 0 ,target, scrollTo);
    // element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  

  window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset)
    y -= 500;
    y = y < 0 ? 0 : y;
    document.querySelector('.nav').style.backgroundColor = `rgba(0, 0, 0, ${y * 0.003})`;
  })

  return (
    <nav class={(props.mode==='docs' && 'docsTopNav')}>
      <nav class='nav'>
        {/* href='/#install' */}
        { (props.mode!=='docs') && <div class='navItem leftNavItem'><a onclick={()=>scrollToId('install')} >Get Started</a></div> }
        { (props.mode==='docs') && <div class='navItem leftNavItem'><a href="/" >Solid Rewind</a></div> }
        <div class='navSpacer'></div>
        <div class='navItem'><a onclick={()=>scrollToId('team')} >Team</a></div>
        <div class='navItem'><a href='/demo'>Demo</a></div>
        {/* <div class='navItem'><a href='/docs/installation'>Docs</a></div> */}
        <div class='navItem'><a href='https://github.com/oslabs-beta/solid-rewind'>Github</a></div>
        <div class='navItem'><a href='https://www.solidjs.com/blog/introducing-solidstart'>Medium Artcile</a></div>
      </nav>
    </nav>
  );
}

export default Nav;

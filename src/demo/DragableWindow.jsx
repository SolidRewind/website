/* global chrome */
import { createSignal, createEffect, onMount} from 'solid-js';


function DragableWindow(props) {

  const [mouseListeners, setMouseListeners] = createSignal(false);
  const [winPos, setWinPos] = createSignal([props.x, props.y]);

  const setPos = (x, y) => {
    const dragObj = document.querySelector('#'+ props.id);
    dragObj.style.left = x + "px";
    dragObj.style.top = y + "px";
  }

  const startDrag = (event) => {
    // dont start drag on right click
    if (event.ctrlKey || event.which !== 1) return;

    // clear event listeners if they are still somehow there.
    if (mouseListeners()) removeListeners();

    // if mouseMove listener is not on, add it.
    if (!mouseListeners()) {
      setMouseListeners(true);
      window.addEventListener('mousemove', handeMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
  }

  const handeMouseMove = (e) => {
    const dragObj = document.querySelector('#'+ props.id);

    const currentX = dragObj.offsetLeft;
    const currentY = dragObj.offsetTop;
    
    setPos((currentX + e.movementX), (currentY + e.movementY));
  }

  const handleMouseUp = (e) => {
    const dragObj = document.querySelector('#'+ props.id);
    if (winPos()[0] !== dragObj.offsetLeft && winPos()[1] !== dragObj.offsetTop) {
      setWinPos([dragObj.offsetLeft, dragObj.offsetTop]);
    }
    removeListeners();
  }

  createEffect(() => {
    const dragObj = document.querySelector('#'+ props.id);
    setPos(winPos()[0], winPos()[1]);
  });

  onMount(async () => {
    setPos(winPos()[0], winPos()[1]);
  });


  const removeListeners = () => {
    window.removeEventListener('mousemove', handeMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setMouseListeners(false);
  }

  return (
    // <div class='dragBar' onMouseDown={startDrag}></div>
    <div class='dragWindow' id={props.id}  onMouseDown={startDrag} >{props.children}</div>
  )
}

export default DragableWindow;

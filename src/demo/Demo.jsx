import { createSignal, For } from 'solid-js';
import { nanoid } from "nanoid";
import TaskAdder from "./TaskAdder";
import TaskList from './TaskList';
import DragableWindow from './DragableWindow';
import '../style/todo-style.css';
import WindowBox from './WindowBox';
import WinMaker from './WinMaker';
import { setUpMessageRelayingFromSoldRewindToDevtool } from '../debugger/sendAndListen';
// import Version from './Version';

const Demo = () => {

  const [task, setTask] = createSignal("");
  const [taskList, setTaskList] = createSignal({
    [nanoid(8)] : "Install Solid-Rewind",
    [nanoid(8)] : "Wrap top component",
    [nanoid(8)] : "Download Chrome Extension",
    [nanoid(8)] : "Start debugging!"
  });
  const [windows, setWindows] = createSignal({
    // [nanoid(8)] :<DragableWindow id='dragWin1' x={400} y={90}><WindowBox winNum='1' deleteWin={deleteWin} /></DragableWindow>,
    // [nanoid(8)] :<DragableWindow id='dragWin2' x={450} y={140}><WindowBox winNum='2' deleteWin={deleteWin} /></DragableWindow>,
    // [nanoid(8)] :<DragableWindow id='dragWin3' x={500} y={190}><WindowBox winNum='3' deleteWin={deleteWin} /></DragableWindow>
  });

  const submitTask = (id) => {
    // do nothing if task is empty
    if (task() === '') return;

    // get task list
    const newTaskList = Object.assign({}, taskList());
    // add new task
    newTaskList[ nanoid(8) ] = task();
    // update task list
    setTaskList(newTaskList);
    // clear submit text
    setTask('');
  } 

  const deleteTask = (id) => {
    const newTaskList = Object.assign({}, taskList());
    delete newTaskList[id];
    setTaskList(newTaskList);
  }

  const deleteWin = (id) => {
    const newWinList = Object.assign({}, windows());
    delete newWinList[id];
    setWindows(newWinList);
  }

  const newWin = () => {
    const newWinList = Object.assign({}, windows());
    const winID = nanoid(8);
    const length = Object.keys(windows()).length;
    const x = 600 + 35 * length;
    const y = 350 + 50 * length;
    newWinList [ winID ] = [x, y];
    setWindows(newWinList);
  }

  const applyOverflowHiddenToBody =()=> {
    const dragObj = document.querySelector('body');
    dragObj.style.overflow = 'hidden';
  }
  applyOverflowHiddenToBody();

  // const editTask= (id) => {
  //   const t = taskList()[id]
  //   const newTaskList = Object.assign({}, taskList());
  //   newTaskList[id] = task(); 
  //   setTaskList(newTask);
  // }
  setUpMessageRelayingFromSoldRewindToDevtool();

  return (
    <div  class="demoContainer">
      
      <div class='demoBG'>

        <nav class='nav backNav'>
          <div class='navItem'><a href='/'>&#x3c; &nbsp;&nbsp;return&nbsp;&nbsp;to&nbsp;&nbsp;homepage</a></div>
        </nav>

        <notice id='demoMobilePopupParent'>
          <div id='demoMobilePopup'>
            Solid Rewind Demo only availible on desktop.

            <a href='/'>????&nbsp;&nbsp;back</a>
          </div>
        </notice>

      
        <DragableWindow id='taskAdder' x={35} y={85}>
          <TaskAdder task={task} submitTask={submitTask} setTask={setTask}  />
        </DragableWindow>

        <DragableWindow id='taskList' x={35} y={350}>
          <TaskList taskList={taskList} deleteTask={deleteTask} />  
        </DragableWindow>

        <DragableWindow id='winMaker' x={350} y={85}>
          <WinMaker newWin={newWin} />
        </DragableWindow>
    
        <For each={Object.keys(windows())}>{(winkey, i) =>

          <DragableWindow id={'win_' + winkey} x={windows()[winkey][0]} y={windows()[winkey][1]}>
            <WindowBox winID={winkey} deleteWin={deleteWin} />
          </DragableWindow>
          
        }</For>

      </div>
      {/* <Version /> */}
    </div>
  );
};

export default Demo;
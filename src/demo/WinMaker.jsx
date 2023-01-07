
import '../style/todo-style.css';
import DragBar from './DragBar';

function WinMaker( props ) {

  return (
    <div class="mt-18">
      <form class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DragBar />
        <div class="mb-6">
          <label class="block text-white-700 text-sm font-bold mb-2" for="username">
            Window Maker
          </label>
          <button onClick={props.newWin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            new win
          </button>
        </div>
      </form>
    </div>
  );
}

export default WinMaker;
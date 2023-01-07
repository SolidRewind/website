
import '../style/todo-style.css';
import DragBar from './DragBar';

function TaskAdder( props ) {

  return (



    // <div class="relative rounded-xl overflow-auto">
      <div class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <DragBar />
        <label class="block text-white-700 text-sm font-bold mb-2" for="username">
            Task List
        </label>
        <table class="">

                
          {/* <For each={Object.keys(cats()}>{(cat, i) =>
            <li>
              <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
                {i() + 1}: {cat.name}
              </a>
            </li>
          }</For> */}

          <tbody class="bg-white dark:bg-slate-900">
            {Object.keys(props.taskList()).map((k) => (
              <tr>
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">
                  {props.taskList()[k]}
                </td>
                {/* <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.editTask(k)}>Edit</button>
                </td> */}
                <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-12 text-slate-500 dark:text-slate-400">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => props.deleteTask(k)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    // </div>


    // <div class="flex justify-center mt-18 pt-20">
    //   <form class="bg-white dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <div class="mb-6">
    //       <label class="block text-white-700 text-sm font-bold mb-2" for="username">
    //         Task
    //       </label>
    //       <input value={props.task()} onInput={(e) => props.setTask(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="data" type="text" placeholder="Data1"/>
    //     </div>
    //     <div class="flex items-center justify-between">
    //       <button onClick={props.submitTask} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //         Add Task
    //       </button>
    //       {/* <button onClick={() => props.buttonName() === "Add Data" ? props.submitUser() : props.submitUser(id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //         {props.buttonName()}
    //       </button> */}
    //     </div>
    //   </form>
    // </div>
  );
}

export default TaskAdder;






  
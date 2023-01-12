// import Rewind from "solid-rewind";
// import Rewind from '../../../solid-rewind/rewind-devtool/src/Rewind';
import Demo from "./Demo.jsx";
function DemoWrapper() {

  return (
    // <Rewind runInProduction={true}>
    <div>
      <div class="hideOverflow">
        <Demo/>
      </div>
      <iframe src = "./IframeDemo" id='IframeDemo' class='timelineContainer'></iframe>
    {/* </Rewind> */}
    </div>
  );
}

export default DemoWrapper;

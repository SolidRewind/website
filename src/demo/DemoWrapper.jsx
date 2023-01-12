import Rewind from "solid-rewind";
// import Rewind from '../../../solid-rewind/rewind-devtool/src/Rewind';
import Demo from "./Demo";
function DemoWrapper() {

  return (
    <Rewind>
      <div class="hideOverflow">
        <Demo/>
      </div>
      <iframe src = "./Iframe" id='Iframe' class='timelineContainer'></iframe>
    </Rewind>
  );
}

export default DemoWrapper;

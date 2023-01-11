import Rewind from "solid-rewind";
import Demo from "./Demo";
import Nav from "../components/Nav";
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

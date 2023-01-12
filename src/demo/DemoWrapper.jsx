import Rewind from "solid-rewind";
import Demo from "./Demo";

function DemoWrapper() {

  return (
    <Rewind runInProduction={true}>
      <Demo/>
    </Rewind>
  );
}

export default DemoWrapper;

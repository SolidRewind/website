import Rewind from "solid-rewind";
import Demo from "./Demo";
import Nav from "../components/Nav";
function DemoWrapper() {

  return (
    <>
      <Rewind>
        <Demo/>
      </Rewind>
    </>
  );
}

export default DemoWrapper;

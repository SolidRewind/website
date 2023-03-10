import { createSignal } from 'solid-js';

function Version() {

  const [versionNo, setVersionNo] = createSignal('1.0.3');
  return (
    <div class='versionNo'>
      v{versionNo}
    </div>
  );
}

export default Version;

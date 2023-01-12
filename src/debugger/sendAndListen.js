// SEND DATA FROM THE 'TOOL' to the 'PAGE'
export const sendData = async ( payload, type ) => {
  const data = {
    from : 'FROM_DEVTOOL',
    type,
    payload
  };
  window.parent.postMessage(data, '*');

  // REPLACING THIS CODE:
    // await chrome.runtime.sendMessage({
    //   from : 'FROM_DEVTOOL',
    //   type,
    //   payload
    // });
}


// all our listners
const initComplete = [false];
const listeners = {}


export function listenFor(type, callback) {
  if (!initComplete[0]) init();
  // create new array of listner callbacks that execute when this message type comes in
  if (!listeners[type]) listeners[type] = new Map();
  // add callback
  listeners[type].set(callback, callback);
}


function init() {
  initComplete[0] = true;
  window.addEventListener("message", function(event) {
    let request = event.data
    if (listeners[request.type]) {
      for (const cb of listeners[request.type].values()){
        cb( request.payload );
      }
    }
  });

  // REPLACED THIS CODE
      // chrome.runtime.onMessage.addListener(
      //   function(request, sender, sendResponse) {
      //     // if type is found in listener list
      //     if (listeners[request.type]) {
      //       // execute callback on each function we saved under that type
      //       for (const cb of listeners[request.type].values()){
      //         cb( request.payload );
      //       }
      //     }
      //   }
      // );
}

// SEND MESSAGES TO IFRAME
export function setUpMessageRelayingFromSoldRewindToDevtool() {
  window.addEventListener("message", function(event) {
    // We only accept messages from the window. change this to a specific div
    if (event.source !== window) return;
    // send from page to devtoool
    if (event.data.from && event.data.from === "FROM_PAGE") {
      document.getElementById('Iframe').contentWindow.postMessage(event.data);
    }
  });
}

// testing only
export function testSendMessageToDevtool(data) {
  document.getElementById('Iframe').contentWindow.postMessage(data);
}

const nameDictionary = {
  pC : 'App',
  gC : 'App',
  AC : 'Demo',
  rs : 'DragableWindow',
  vO : 'For',
  rl : 'DragBar',
  kC : 'WindowBox',
  WC : 'TaskAdder',
  $C : 'TaskAdder',
}


export const getName = (compName) => {
  console.log('incoming name', compName);
  return nameDictionary[compName] ?nameDictionary[compName] : compName;
}
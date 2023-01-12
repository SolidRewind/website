
const nameDictionary = {
  pC : 'App',
  gC : 'App',
  AC : 'Demo',
  rs : 'DragableWindow',
  vO : 'For',
  v0 : 'For',
  rl : 'DragBar',
  kC : 'WindowBox',
  WC : 'TaskAdder',
  wC : 'TaskAdder',
  lC : 'WinMaker',
  '1C' : 'WinMaker',
  IC : 'WinMaker',
  $C : 'TaskAdder',
}


export const getName = (compName) => {
  console.log('incoming name', compName);
  return nameDictionary[compName] ?nameDictionary[compName] : 'AppComp';
}
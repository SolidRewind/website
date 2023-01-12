
const nameDictionary = {
  pC : 'App',
  AC : 'Demo',
  rs : 'DragableWindow'
}


export const getName = (compName) => {
  console.log('incoming name', compName);
  return nameDictionary[compName] ?nameDictionary[compName] : compName;
}
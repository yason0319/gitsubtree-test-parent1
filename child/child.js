const parentNo = 1;

function child () {
  console.log('child');
  console.log('parent1 on feature branch!');
}

function onlyParent1 () {
  console.log('only parent1');
}

function onlyChild () {
  console.log('only child');
  console.log('add at parent1')
}
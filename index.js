function getFirstSelector(selector) {
  var selected = document.querySelector(selector);
  return selected;
}

function nestedTarget() {
  var nested = document.querySelector('#nested .target');
  return nested;
}

function deepestChild() {
  function lastChildItem(array) {
  if (array.childElementCount < 1) {return true}
  else if (array.childElementCount > 0) {return false}
  else {console.error(`Can't read: ${array.childElementCount} as a number for comparison`)}
  }

  function objectDive(obj) {
  var a = obj[0]
  while (!lastChildItem(a)) {
  var b = a.children[0]
  a = b;
  }
  if (lastChildItem(a)) {return a}
  else {return `${a} is unexpected`}
  }

var obj = document.querySelectorAll('div#grand-node');
return objectDive(obj);


}

function increaseRankBy(n) {
  var a = document.querySelectorAll('#app li');
  for (let i=0,l=a.length;i<l;i++) {
    a[i].textContent = (parseInt(a[i].textContent) + n).toString()
  }

}

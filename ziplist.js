const testnumbers = [1, 2, 3];
const testcharacters = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const zippedlist = [];
  for (let i = 0; i < list1.length; i++) {
    zippedlist.push(list1[i]);
    zippedlist.push(list2[i]);
  }
  return zippedlist;
}

console.log(zipList(testnumbers, testcharacters));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testnumbers, testcharacters));

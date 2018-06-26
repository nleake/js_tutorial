let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(urlify(state));
  });
  return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}
console.log(functionalMap(states));

// filter: Imperative version
function imperativeFilter(states) {
    let singleWordStates = [];
    states.forEach(function(state) {
      if (state.split(/\s+/).length === 1) {
        singleWordStates.push(state);
      }
    });
    return singleWordStates;
  }
console.log(imperativeFilter(states));
  
// filter: Functional version
function functionalFilter(states) {
return states.filter(state => state.split(/\s+/).length === 1);
}
console.log(functionalFilter(states));


// reduce object: Imperative solution
function imperativeLengths(states) {
    let lengths = {};
    states.forEach(function(state) {
      lengths[state] = state.length;
    });
    return lengths;
  }
  console.log(imperativeLengths(states));
  
  // reduce object: Functional solution
  function functionalLengths(states) {
    return states.reduce((lengths, state) => {
                            lengths[state] = state.length;
                            return lengths;
                          }, {});
  }
  console.log(functionalLengths(states));
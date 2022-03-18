// Good practice: variables shall be declared on the top of the scope.
var globalScope = 'global'
console.log(globalScope);

function localScope() {
    // Good practice: variables shall be declared on the top of the scope.
    let localScopeVariable = 'local';
    return localScope = "someone's in here"
}

// console.log(localScopeVariable); // Uncaught ReferenceError: localScopeVariable is not defined
console.log(localScope());
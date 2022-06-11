const helloWorld = () => {
  const variable = 'Hello world';
  console.log(variable);
}

helloWorld();

// Throws an error 
// console.log(variable);

var scope = "i'm a global scope";

const functionScope = () => {
  var scope = "i'm a local scope";
  const func = () => {
    return scope;
  }
  console.log(func());
}

// Overwrite the scope var value 
functionScope();
// Takes the first scope value
console.log(scope);
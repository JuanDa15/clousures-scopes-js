const person = () => {
  var savedName = "juan david";
  return {
    getSavedName: () => {
      return savedName;
    },
    setName: (name) => {
      savedName = name;
    }
  }
}

const newPerson = person();

console.log(newPerson.getSavedName());
newPerson.setName('juan david osorio')
console.log(newPerson.getSavedName());
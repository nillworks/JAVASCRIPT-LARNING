// Javascript This

const student = {
  fName: 'shipon',
  age: 34,
  singu: function () {
    return `this is ${this.fName} my loves`;
  },
  f1Name: () => {
    return `this is my age ${this.age}`;
  },
};

console.log(student.singu());
console.log(student.f1Name());

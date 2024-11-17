function privateInfo() {
  let PII = {
    name: "Andrea Merlos",
    SSN: "123-69-8127",
  };

  return {
    getName: function () {
      return PII.name;
    },
    getSSN: function () {
      return PII.SSN;
    },
  };
}

let patient2 = privateInfo();

console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());

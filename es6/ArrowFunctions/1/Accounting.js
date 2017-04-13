const inventory = [{
  type: "machine",
  value: 5000
}, {
  type: "machine",
  value: 650
}, {
  type: "duck",
  value: 10
}, {
  type: "furniture",
  value: 1200
}, {
  type: "machine",
  value: 77
}]

let totalMachineValue = inventory.reduce((a, b) => {
  if (a.value == undefined) {
    return a + b.value;
  } else {
    return a.value + b.value;
  }
});


console.log(totalMachineValue)

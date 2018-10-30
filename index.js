// Code your solution in this file
const findMatching = (drivers, name) => drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())

const fuzzyMatch = (drivers, fuzz) => {
  return drivers.filter(driverName => driverName.slice(0, fuzz.length) === fuzz )
}

function matchName(drivers, name) {
  return drivers.filter( driver => driver.name === name)
}

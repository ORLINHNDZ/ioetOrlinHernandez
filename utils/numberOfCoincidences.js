const {file} = require('./mapSchedules');
const {schedules} = require('./mapSchedules');
const sameTimes = require('./sameTimes');
const data = require('./stringifyData'); 

const path = function(path) { 
  const dataSet = data(path);
  const employeesSchedules = file(dataSet);
  const allSchedules = schedules(employeesSchedules);
   const storeResult = {};
  allSchedules.forEach((schedule) => {
    const {employee, day, from, to } = schedule;
    const matching = sameTimes(day, from, to, employeesSchedules);
    matching.forEach((i) => {
      if (employee === i) return;
      const repeatedKey = `${employee}-${i}`;
      if (!storeResult[repeatedKey]) {
        storeResult[repeatedKey] = [];
      }
      storeResult[repeatedKey].push(`${day}-${from}-${to}`);
    });
  });
  const pairedValues = Object.keys(storeResult).map(match => {
    return `${match}: ${storeResult[match].length}`;
  });
  
  return pairedValues;
};

module.exports = path
const schedules = function(schedules) {  
  const names = Object.keys(schedules);

  const SchdulesData = names.map((employee) => {
    const individualSchedule = schedules[employee];
    const days = Object.keys(individualSchedule);
    const inputSchedule = days.map((day) => {
      const { from, to } = individualSchedule[day];
      return {
        employee,day,from,to,
      };
    });
    return inputSchedule;
  })
  .flat(2);

  return SchdulesData;
};



const file = function(file) {  
  const schedulesObject = {};

  const refactorSpaceString = file.split('\n');
  let refactorByName = refactorSpaceString.map((text) => {
      return text.split('=');
  }).flat();
    
  refactorByName.reduce((left, middle, i) => {
    if (i % 2 !== 0) {
      const days = middle.match(/([A-Z]{2})/g);
      const hours = middle.match(/([0-1]?[0-9]|2[0-3]):[0-5][0-9]/g);
      const dataSet = {}

      days.forEach((day, i) => {
          dataSet[day] = {}
          if (i > 0) {
              const startTimePosition = i * 2;
              const endTimePosition = (i * 2) + 1;
              dataSet[day]['from'] = hours[startTimePosition]
              dataSet[day]['to'] = hours[endTimePosition]
          }
          if (i === 0) {
              dataSet[day]['from'] = hours[0]
              dataSet[day]['to'] = hours[1]
          }
      });      
      schedulesObject[left] = dataSet;
    }
        
      return middle;
  });

  return schedulesObject;
};



module.exports = {schedules, file}

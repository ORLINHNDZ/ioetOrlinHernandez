
 const sameTimes = function(day, timeStart, timeEnd, schedules){ 
  const names = Object.keys(schedules);

  const matched = names.filter((i) => {
    const indiSchedule = schedules[i];
    const dataSetDay = indiSchedule[day];

    if (dataSetDay) {
      const { from, to } = dataSetDay;

      const pointA = new Date(`0000-01-01 ${from}`).getTime();
      const pointB = new Date(`0000-01-01 ${to}`).getTime();

      const pointAStart = new Date(`0000-01-01 ${timeStart}`).getTime();
      const pointBEnd = new Date(`0000-01-01 ${timeEnd}`).getTime();

      const samePointA = pointA === pointAStart && pointB === pointBEnd;
      const middlePointA = pointAStart <= pointA && pointBEnd >= pointA;
      const middleEmpTime = pointA <= pointAStart && pointB >= pointAStart;
      if(samePointA || middlePointA || middleEmpTime) return true;

      
    }
    return false;
  });

  return matched;
};

module.exports = sameTimes
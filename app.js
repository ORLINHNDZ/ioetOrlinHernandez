const numberOfCoincidences = require('./utils/numberOfCoincidences');
const matchingResults = numberOfCoincidences('./schedule.txt');

const showCaseMatch= function(){
    try {
        console.log('This is the amount of times employees had a coincidence: ', matchingResults);
    } catch (error) {
        console.log(error)
    } 
}

showCaseMatch()



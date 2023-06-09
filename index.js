// code your solution here
function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(event = 'go to the office') {
    return `This Monday, I will ${event}.`;
}
function wrapAdjective(flair = '*') {
    return function(param = 'special') {
      return `You are ${flair}${param}${flair}!`;
    }
  }
  
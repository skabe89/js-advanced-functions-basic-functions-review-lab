// Your code here

function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol="*"){
  return function(adj){
    return `You are ${symbol}${adj}${symbol}!`
  }
}

let Calculator = {
  add: function(a, b){return a + b},
  subtract: function(a, b){return a - b},
  multiply: function(a, b){return a * b},
  divide: function(a, b){return a / b},
}

actionApplyer = function(int, array){
  array.forEach(e => {
    int = e(int)
  })
  return int
}
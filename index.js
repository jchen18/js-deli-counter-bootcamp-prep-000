var katzDeliLine = [];
function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  var number = katzDeliLine.indexOf(person) +1;
  return (`Welcome, ${person}. You are number ${number} in line.`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return(`Currently serving ${katzDeliLine[0]}.`);
  }
  else{
    return ("There is nobody waiting to be served!");
  }
  katzDeliLine.shift();
}
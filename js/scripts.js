//buisness logic
const convertToArray = function(number){
  let numberArray =[];
  for(let i=0; i<=number; i++){
    numberArray.push(i);
  }
  return numberArray;
}

const numberToArray = function(number){
  let result=[];
  while(number > 0){
    let remainder = number%10;
    result.unshift(remainder); 
    number = Math.floor(number/10);
  }
  return result;
}

const replaceNumberToString = function(numberArray){
  return replacedArray = numberArray.map(function(element){
    let elemToArray = numberToArray(element);
    if(elemToArray.includes(3)){
      return element = "Won't you be my neighbor?";
    } else if(elemToArray.includes(2)){
      return element = "Boop!";
    } else if(elemToArray.includes(1)){
      return element = "Beep!";
    } else {
      return element;
    }
  });
}

//user interface logic
$(document).ready(function(){
  let arrayResult = [];
  $("form").submit(function(event){
    event.preventDefault();
    $("ol#result").children().remove();
    const number = parseInt($("input#number").val());
    if(!number || number < 1){
      alert("Empty or incorrect input, your input should be a positive number");
      $("input#number").val("");
      $(".result").hide();
      return;
    }
    arrayResult = replaceNumberToString(convertToArray(number));
    arrayResult.forEach(function(element){
      $("ol#result").append("<li>"+element+"</li>")
    });
    $(".result").show();
    $("input#number").val("");
  });
  $("#reverse").click(function(){
    $("ol#result").children().remove();
    arrayResult.reverse();
    arrayResult.forEach(function(element){
      $("ol#result").append("<li>"+element+"</li>")
    });
    $(".result").show();
  });
});
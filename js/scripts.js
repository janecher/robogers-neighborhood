//buisness logic
const convertToArray = function(number){
  let numberArray =[];
  for(let i=0; i<=number; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

const numberToArray = function(number){
  let result=[];
  while(number > 0) {
    let remainder = number%10;
    result.unshift(remainder); 
    number = Math.floor(number/10);
  }
  return result;
}

const replaceNumberToString = function(numberArray, name){
  return replacedArray = numberArray.map(function(element){
    if(element%3 === 0) {
      return element = "Won't you be my neighbor, " + name + "?";
    }
    let elemToArray = numberToArray(element);
    if(elemToArray.includes(3)) {
      return element = "Won't you be my neighbor?";
    } else if(elemToArray.includes(2)) {
      return element = "Boop!";
    } else if(elemToArray.includes(1)) {
      return element = "Beep!";
    } else {
      return element;
    }
  });
}

const resultColor = function(number){
  if(number < 6) {
    return "#ffd6cc";
  } else if(number < 16) {
    return "#ffebcc";
  } else if(number < 26) {
    return "#ffffcc";
  } else if(number < 36) {
    return "#d6f5d6";
  } else if(number < 46) {
    return "#ccffff";
  } else if(number < 56) {
    return "#cce6ff";
  } else {
    return "#e6ccff";
  }

}

//user interface logic
$(document).ready(function(){
  let arrayResult = [];
  $("form").submit(function(event){
    event.preventDefault();
    $("ol#result").children().remove();
    const number = parseInt($("input#number").val());
    const name = $("input#name").val();
    arrayResult = replaceNumberToString(convertToArray(number), name);
    arrayResult.forEach(function(element){
      $("ol#result").append("<li> " + element + "</li>");
    });
    $(".result").css("background-color", resultColor(number));
    $(".result").show();
    $("input#number").val("");
    $("input#name").val("");

  });
  $("#reverse").click(function(){
    $("ol#result").children().remove();
    arrayResult.reverse();
    arrayResult.forEach(function(element){
      $("ol#result").append("<li> " + element + "</li>");
    });
  });
});
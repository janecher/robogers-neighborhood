//buisness logic
const convertToArray = function(number){
  let numberArray =[];
  for(let i=1; i<=number; i++){
    numberArray.push(i);
  }
  return numberArray;
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const number = parseInt($("input#number").val());
    if(!number || number < 1){
      alert("Incorrect input, your input should be a positive number");
      $("input#number").val("")
      return;
    }
    const arrayOfNumbers = convertToArray(number);
    arrayOfNumbers.forEach(function(element){
      $("ol#result").append("<li>"+element+"</li>")
    });
    $(".result").show();
  });
});
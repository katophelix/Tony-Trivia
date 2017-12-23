
$("#totals").hide();
$("#questions").hide();
$("#restart-button").hide();

function html() {
  window.location.href = "index2.html";
}

var number = 60;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
  intervalId = setInterval(decrement, 1000);
  $("#questions").show();
  $("#message").html("Answer before time runs out!");
  $("#start-button").hide();
 
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#show-number").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();
    //redirect to html3

  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  $("#totals").show();
  $("#questions").hide();
  $("#show-number").hide();
  $("#message").html("Game Over");


  var unanswered = 5-$('input[type="radio"]:checked').length;
  console.log(unanswered);
  $("#unanswered-counter").html(unanswered);
}

//  Execute the run function.
$("#start-button").on("click", run);


$("#game-over").on("click", stop);



$("input").change(function () {
  var total = 0;
  $("input[type=radio]:checked").each(function () {
    total += parseInt($(this).attr("value"));
  });

  $("#correct-counter").html(total);

  var total2 = 5 - total;
  $("#incorrect-counter").html(total2);

  // var total3 = (3-(total + total2));
  // $("#unanswered-counter").html(total3);
  // var total3 = (total + total2)-5;

 
  
});
// var total3 = 0;




//').each(function () {
 // total3 += parseInt($(this).attr("value"));

//   $("#unanswered-counter").html(total3);
// });


// $("input").change(function () {
//   var total3 = 0;
//   $("input[type=radio]:unchecked").each(function () {
//     total3 += parseInt($(this).attr("value"));

//     console.log(total3);
//     $("#unanswered-counter").html(total3);

//   });




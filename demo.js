
var modal = document.querySelector(".modal");
var open = document.querySelector(".open");
var closeButton = document.querySelector(".close");
var avgRating = document.querySelector(".avg-rating")

//function to toggle the show-modal class
function toggleModal() {
  modal.classList.toggle("show-modal");
}

//closes modal after submitting rating
function closeAfterSubmit() {
    modal.classList.toggle("show-modal");
 }

//function for on click event will trigger the toggle modal function
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

//opens modal box on click
open.addEventListener("click", toggleModal);
//modal X close button
closeButton.addEventListener("click", toggleModal);
//allows user to click away from box
window.addEventListener("click", windowOnClick);

var arr = [];
document.querySelector(".avg-rating").innerHTML = 0;

//function to count the stars checked and calls the getAvg function
function countCheckedStars() {
  let stars = document.querySelectorAll('input[type="radio"]')
  for (let i = 0; i < stars.length; i++) {
    if (stars[i].checked === true) {
      arr.push(stars[i].value)
    }
  }
  getAvg(arr);
}

//calculate average of ratings and calls tbe displayAvgRating function
function getAvg(arr) {
 var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += parseInt( arr[i], 6 );
    }
    var avgRating = total/arr.length;
  displayAvgRating(avgRating)
}

//display the average on screen to one decimal place
function displayAvgRating(avgRating) {
    document.querySelector(".avg-rating").innerHTML = (avgRating).toFixed(1);
}

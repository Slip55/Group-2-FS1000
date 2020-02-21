document.addEventListener("DOMContentLoaded", function() {
  let today;
  switch (new Date().getDay()) {
    case 0:
      today = "Sun";
      break;

    case 1:
      today = "Mon";
      break;

    case 2:
      today = "Tue";
      break;

    case 3:
      today = "Wed";
      break;

    case 4:
      today = "Thu";
      break;

    case 5:
      today = "Fri";
      break;

    case 6:
      today = "Sat";
      break;
  }
  const optHour = [
    [0, 1300, 1730],
    [1, 900, 2030],
    [2, 900, 2030],
    [3, 900, 2030],
    [4, 900, 2030],
    [5, 900, 2030],
    [6, 1300, 1830]
  ];
  document.getElementById(today).style.fontWeight = "bold";
  let hourNow = new Date().getHours();
  let minNow = new Date().getMinutes();
  let timeNow = hourNow + minNow / 60;
  const optDesc =
    timeNow < optHour[new Date().getDay()][1] ||
    timeNow > optHour[new Date().getDay()][2]
      ? "<span style='font-size:1.1em; color:orangered'><b>We are closed.</span>"
      : "<span style='font-size:1.1em; color:green'><b>We are open.</span>";

  document.getElementById("operationStat").innerHTML = timeNow;
  document.getElementById("operationStat").innerHTML = optDesc;
});

let formID = new Array();
formID[0] = "guestName";
formID[1] = "guestEmail";
formID[2] = "guestTopic";
formID[3] = "guestMsg";

let errPrompt = new Array();
errPrompt[0] = "errName";
errPrompt[1] = "errEmail";
errPrompt[2] = "errTopic";
errPrompt[3] = "errMsg";

function formcheck() {
  let formInput = new Array();
  formInput[0] = document.getElementById(formID[0]);
  formInput[1] = document.getElementById(formID[1]);
  formInput[2] = document.getElementById(formID[2]);
  formInput[3] = document.getElementById(formID[3]);

  function invalidInput() {
    formInput[i].style.border = "0.5px groove orangered";
    formInput[i].style.boxShadow = "1px 2px 3px orangered";
    document.getElementById(errPrompt[i]).innerHTML = 0;
  }

  function validInput() {
    formInput[i].style.border = "0.5px groove #158050";
    formInput[i].style.boxShadow = "none";
    document.getElementById(errPrompt[i]).innerHTML = 1;
  }

  for (i = 0; i < formInput.length; i++) {
    if (formInput[i].value == "") {
      invalidInput();
    } //general i
    else if (i == 0) {
      if (/^[-\sa-zA-Z]{4,20}$/.test(formInput[i].value)) {
        validInput();
      } else {
        invalidInput();
      }
    } //i=0
    else if (i == 1) {
      if (
        /^\w+([\.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(formInput[i].value)
      ) {
        validInput();
      } else {
        invalidInput();
      }
    } //i=1
    else if (i == 2) {
      if (formInput[i].value.length < 9 || formInput[i].value.length > 50) {
        invalidInput();
      } else {
        validInput();
      }
    } //i=3
    else if (i == 3) {
      if (formInput[i].value.length < 20 || formInput[i].value.length > 750) {
        invalidInput();
      } else {
        validInput();
      }
    } //i=4
    else {
      validInput();
    }
  }
}

function formCheckMsg() {
  //validating message
  if (
    document.getElementById(errPrompt[0]).innerHTML == 1 &&
    document.getElementById(errPrompt[1]).innerHTML == 1 &&
    document.getElementById(errPrompt[2]).innerHTML == 1 &&
    document.getElementById(errPrompt[3]).innerHTML == 1
  ) {
    document.getElementById("formCheckMsg").innerHTML =
      "<span style='font-size: 0.8em; font-weight:bold; color:#158050'>*All information is validated! Please submit!</span>";
  } else {
    document.getElementById("formCheckMsg").innerHTML =
      "<span style='font-size: 0.8em; font-weight:bold; color:red'>*Valid information is required in the fields in red!</span>";
  }
}

function submitPrompt() {
  //submit message
  if (
    document.getElementById(errPrompt[0]).innerHTML == 1 &&
    document.getElementById(errPrompt[1]).innerHTML == 1 &&
    document.getElementById(errPrompt[2]).innerHTML == 1 &&
    document.getElementById(errPrompt[3]).innerHTML == 1
  ) {
    document.getElementById("formCheckMsg").innerHTML =
      "<span style='font-size: 0.8em; font-weight:bold; color:green'>*Thank you for submitting. We will respond to your inquiry within 24 hours!</span>";
  }
}

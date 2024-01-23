function timeConversion(s) {
  let timeArray = s.split("");
  if (timeArray[timeArray.length - 2] === "A")
    return timeArray.splice(7, 2).join("");
  let newHour = String(Number(`${timeArray[0]}${timeArray[1]}`) + 12);
  if (newHour === "24") newHour = "00";
  timeArray.splice(0, 2, newHour);
  timeArray.splice(7, 2);
  console.log(timeArray.join(""));
  return timeArray.join("");
}

timeConversion("12:40:22AM");

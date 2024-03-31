function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");

  let tokyoDate = moment().tz("Asia/Tokyo").format(" dddd, MMMM D ");
  tokyoDateElement.innerHTML = tokyoDate;

  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ssa");
  tokyoTimeElement.innerHTML = tokyoTime;

  //russia
  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");

  let moscowDate = moment().tz("Europe/Moscow").format(" dddd, MMMM D ");
  moscowDateElement.innerHTML = moscowDate;

  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow").format("h:mm:ssa");
  moscowTimeElement.innerHTML = moscowTime;
}

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");

    let tokyoDate = moment().tz("Asia/Tokyo").format(" dddd, MMMM D ");
    tokyoDateElement.innerHTML = tokyoDate;

    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss a");
    tokyoTimeElement.innerHTML = tokyoTime;
  }
  //russia
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");

    let moscowDate = moment().tz("Europe/Moscow").format(" dddd, MMMM D ");
    moscowDateElement.innerHTML = moscowDate;

    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Europe/Moscow").format("h:mm:ss a");
    moscowTimeElement.innerHTML = moscowTime;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format(" dddd, MMMM D ")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss a")}</div>
    </div>`;
}
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

updateTime();

setInterval(updateTime, 1000);
setInterval(updateCity, 1000);

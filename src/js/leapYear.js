function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    let result = "";

    if (isNaN(year)) {
      result = "Введіть коректний рік";
    } else if (year % 4 !== 0) {
      result = year + " — не високосний рік";
    } else if (year % 100 !== 0) {
      result = year + " — високосний рік";
    } else if (year % 400 === 0) {
      result = year + " — високосний рік";
    } else {
      result = year + " — не високосний рік";
    }

    document.getElementById("result").textContent = result;
}

const buttonCheck = document.getElementById('checkYear');

buttonCheck.addEventListener("click", function() {
    checkLeapYear();
});

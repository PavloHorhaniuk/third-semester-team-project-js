function checkLeapYear() {
    const year = parseInt(document.getElementById("year").value);
    let result = "";

    if (isNaN(year)) {
      result = "Введіть коректний рік";
    } else if (year % 4 !== 0) {
      result = "Ви народилися не у високосний рік!";
    } else if (year % 100 !== 0) {
      result = "Ви народилися у високосний рік!";
    } else if (year % 400 === 0) {
      result = "Ви народилися у високосний рік!";
    } else {
      result = "Ви народилися не у високосний рік!";
    }

    document.getElementById("leap-year__result").textContent = result;
}

const buttonCheck = document.getElementById('leap-year__btn');

buttonCheck.addEventListener("click", function() {
    checkLeapYear();
});

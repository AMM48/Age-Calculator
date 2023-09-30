function calcAge() {
  const day = document.getElementsByName("day")[0];
  const month = document.getElementsByName("month")[0];
  const year = document.getElementsByName("year")[0];
  const displayYear = document.getElementsByTagName("span")[0];
  const displayDay = document.getElementsByTagName("span")[2];
  const displayMonth = document.getElementsByTagName("span")[1];
  const errorDisplay = document.getElementsByTagName("small");
  const labels = document.getElementsByTagName("label");
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const currentDate = new Date(`${currentYear}-${currentMonth}-${currentDay}`);
  let hasError = false;

  if (day.value.trim() === "") {
    errorDisplay[0].textContent = "This Field is Required";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else if (parseInt(day.value) < 1 || parseInt(day.value) > 31) {
    errorDisplay[0].textContent = "Must be a Valid Day";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    labels[0].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else {
    errorDisplay[0].textContent = "";
    day.style.borderColor = "";
    labels[0].style.color = "";
  }

  if (month.value.trim() === "") {
    errorDisplay[1].textContent = "This Field is Required";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else if (parseInt(month.value) < 1 || parseInt(month.value) > 12) {
    errorDisplay[1].textContent = "Must be a Valid Month";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    labels[1].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else {
    errorDisplay[1].textContent = "";
    month.style.borderColor = "";
    labels[1].style.color = "";
  }

  if (year.value.trim() === "") {
    errorDisplay[2].textContent = "This Field is Required";
    year.style.borderColor = "hsl(0, 100%, 67%)";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else if (parseInt(year.value) > currentYear) {
    errorDisplay[2].textContent = "Must be in the Past";
    year.style.borderColor = "hsl(0, 100%, 67%)";
    labels[2].style.color = "hsl(0, 100%, 67%)";
    hasError = true;
  } else {
    errorDisplay[2].textContent = "";
    year.style.borderColor = "";
    labels[2].style.color = "";
  }

  if (hasError) {
    return;
  }

  const birthDate = new Date(`${year.value}-${month.value}-${day.value}`);

  ageInMS = currentDate - birthDate;

  const years = Math.floor(ageInMS / (365.25 * 24 * 60 * 60 * 1000));

  const remainingMilliseconds = ageInMS - years * 365.25 * 24 * 60 * 60 * 1000;

  const months = Math.floor(
    remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
  );

  const remainingMillisecondsAfterMonths =
    remainingMilliseconds - months * 30.44 * 24 * 60 * 60 * 1000;

  const days = Math.floor(
    remainingMillisecondsAfterMonths / (24 * 60 * 60 * 1000)
  );
  displayYear.textContent = years;
  displayMonth.textContent = months;
  displayDay.textContent = days;
}

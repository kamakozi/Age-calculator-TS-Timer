const nowTime = document.getElementById("timer") as HTMLDivElement;
const nowDate = document.getElementById("NowDate") as HTMLHeadingElement;
const ageInp = document.getElementById("ageInp") as HTMLInputElement;
const ageSubmit = document.getElementById("ageSubmit") as HTMLButtonElement;
const ageDiv = document.getElementById("age") as HTMLDivElement;
const dateShow = document.getElementById("dateShow") as HTMLParagraphElement;

const globalDate = new Date();

function time() {
    const newDate = new Date();
    nowTime.innerHTML = `Hour: ${newDate.getHours()} Minute: ${newDate.getMinutes()} Second: ${newDate.getSeconds()}`;
    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDate();

    nowDate.innerHTML = `${year}-${month + 1}-${day}`;
}

ageSubmit.addEventListener("click", () => {
    const selectedDate = new Date(ageInp.value);
    if (!ageInp.value) {
        alert("Please fill the date!");
        return;
    }

    const birthYear = selectedDate.getFullYear();
    const birthMonth = selectedDate.getMonth();
    const birthDay = selectedDate.getDate();

    let calculatedYear = globalDate.getFullYear() - birthYear;
    let calculatedMonth = globalDate.getMonth() - birthMonth;
    let calculatedDay = globalDate.getDate() - birthDay;


    if (calculatedMonth < 0) {
        calculatedMonth += 12;
        calculatedYear -= 1;
    }


    if (calculatedDay < 0) {
        const daysInPreviousMonth = new Date(globalDate.getFullYear(), globalDate.getMonth(), 0).getDate();
        calculatedDay += daysInPreviousMonth;
        calculatedMonth -= 1;
        if (calculatedMonth < 0) {
            calculatedMonth += 12;
            calculatedYear -= 1;
        }
    }

    dateShow.innerHTML = `You are ${calculatedYear} years, ${calculatedMonth} months, and ${calculatedDay} days old.`;
});

setInterval(time, 1000);
time();

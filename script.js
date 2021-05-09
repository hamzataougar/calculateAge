const months =[31,28,31,30,31,30,31,31,30,31,30,31];
var btn = document.getElementById('calculateAge');
//swal("Good job!", "You clicked the button!", "success");


// Event listener
btn.addEventListener('click',calculateAge);

// Functions 
function calculateAge(){
    let today = new Date();
    let inputDate = new Date(document.getElementById('date-input').value);
    let birthMonth,birthday,birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month: inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    // Get years leap 
    leapCheck(currentYear);

    if (birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
        Swal.fire('Mazal Matzaditi!', 'Choose a valid date', 'error')
        return;
    }
    // calculate the year
    birthYear = currentYear - birthDetails.year;

    // Calculate the month
    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }else{
        birthYear-- ;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    // Calculate day 
    if (currentDate >= birthDetails.date) {
        birthday = currentDate - birthDetails.date;
    }else{
        birthMonth -- ;
        let days = months[currentMonth -2];
        birthday = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear --;   
        }
    }
    // Display output in the UI
    diplayAgeUI(birthYear,birthMonth,birthday);
}

function diplayAgeUI(year,month,day){
    document.getElementById('years').innerHTML = year;
    document.getElementById('months').innerHTML = month;
    document.getElementById('days').innerHTML = day;
}

// check if the year is leap 
function leapCheck(year){
    if(year % 4 == 0 || (year % 100 == 0 && year %400 == 0)){
        months[1] = 29;
    }
}
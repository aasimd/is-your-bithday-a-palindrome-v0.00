var birthdate = document.querySelector("#birthdate-input");
var checkButton = document.querySelector("#check-button");
var results = document.querySelector("#results");



function reverseStr (str){
    //console.log(str) //
    var splitStr = str.split("");
    //console.log(splitStr) //
    var splitChars = splitStr.reverse();
    //console.log(splitChars) //
    var reversedStr = splitChars.join("");
    //console.log(reversedStr) //
    return(reversedStr);
}

function ifPalindrome (str){
    var reverse = reverseStr(str)
    //console.log(str === reverse)
    return (str === reverse)
}

var date= {
    day : 1,
    month :2,
    year : 2020
}

function convertDateToStrDate (date) {
    var strDate = { day:'', month:'', year:''}

    if (date.day < 10){
        strDate.day = '0' + date.day;
    } else {
        strDate.day = date.day.toString();
    }
    if (date.month < 10){
        strDate.month = '0' + date.month;
    } else {
        strDate.month = date.month.toString();
    } strDate.year = date.year.toString()
    
    return (strDate);
}

function dateInDiffFormats (date){
    var strDate = convertDateToStrDate(date);

    var ddmmyyyy = strDate.day + strDate.month + strDate.year;
    var mmddyyyy = strDate.month + strDate.day + strDate.year;
    var yyyymmdd = strDate.year + strDate.month + strDate.day;
    var ddmmyy = strDate.day + strDate.month + strDate.year.slice(-2);
    var mmddyy = strDate.month +  strDate.day + strDate.year.slice(-2);
    var yymmdd = strDate.year.slice(-2) + strDate.month + strDate.day;

    return [ ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindrome (date){
    
    var dateFormats = dateInDiffFormats(date);
    var isPalindrome = false;

    for (i = 0 ; i < dateFormats.length ; i++){
        if (ifPalindrome(dateFormats[i])){
            isPalindrome = true;
            break;
        }
    }
    //console.log(isPalindrome)
    return isPalindrome
}
function isLeapYear (year){
    if (year % 400 === 0){
        return true;
    }
    if (year % 100 === 0){
        return false;
    }
    if (year % 4 === 0 ){
        return true;
    }
    return false;
}

function getNextDate (date) {
    var day = 1 + date.day;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month===2){
        if (isLeapYear(year)){
            if (day > 29){
                day = 1;
                month = month + 1;
            } 
        } else { 
            if (day > 28){
            day = 1;
            month = month + 1;
        }
        }
    }
    else {
        if (day > daysInMonth[month - 1]){
        day = 1;
        month = month + 1;
        }
    }
    if (month > 12){
        month = 1;
        year = year + 1;
    }

    //return isLeapYear(year)
    return { day, month, year}
}

function nextPalindromeDate (date){
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1){
        ctr = ctr+1;
        if (checkPalindrome(nextDate)){
            break;
        } else {
            nextDate = getNextDate(nextDate);
        }
    }
    return {ctr , nextDate}
}


function clickHandler (){
    console.log(checkPalindrome(date));
    console.log(getNextDate (date))
    console.log(nextPalindromeDate (date));
    //var dateFormats = dateInDiffFormats(date);
   // var i = 0
    //console.log(ifPalindrome(dateFormats[i]))
}




 checkButton.addEventListener("click",clickHandler)
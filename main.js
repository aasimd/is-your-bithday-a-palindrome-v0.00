var checkBttn = document.querySelector("#check-button");


var date = {
    day : 22,
    month : 2,
    year : 2022
} 

function reverseStr (str){
    var splitStr = str.split("");
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join("");
    return joinStr
}
function isPalindrome (str) {
    return (str===reverseStr(str))
}
function dateToStrDate (date) {
    var strDate = { day : '', month : '', year : '' }

    if(date.day < 10){
        strDate.day = '0' + date.day.toString();
    } else {
        strDate.day = date.day.toString();
    }
    if(date.month < 10){
        strDate.month = '0' + date.month.toString();
    } else {
        strDate.month = date.month.toString();
    }
    strDate.year = date.year.toString();

    return strDate
}
function differentDateFormats (date){
    var strDate = dateToStrDate (date)

    var ddmmyyyy = strDate.day + strDate.month + strDate.year;
    var mmddyyyy = strDate.month + strDate.day + strDate.year;
    var yyyymmdd = strDate.year + strDate.month + strDate.day;
    var ddmmyy = strDate.day + strDate.month + strDate.year.slice(-2);
    var mmddyy = strDate.month +  strDate.day + strDate.year.slice(-2);
    var yymmdd = strDate.year.slice(-2) + strDate.month + strDate.day;

    return [ ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}
function checkPalindromeForDiffFormats(date){
    var dateFormats = differentDateFormats (date);
    var palindrome = false;
    for (i=0 ; i < dateFormats.length ; i++ ){
        if (isPalindrome (dateFormats[i])){
            palindrome = true
        }
    }
    return palindrome;
}
function isLeapYear (year) {
    if (year % 400 === 0 ){
        return true;
    } 
    if (year % 100 === 0){
        return false;
    }
    if (year % 4 === 0){
        return true;
    }
}
function getNextDate (date){
    day = date.day + 1;
    month = date.month;
    year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)){
        if (day>29){
            day = 1;
            month = month + 1;
        }
    } else {
        if (day > 28){
            day = 1;
            month = month + 1;
        }
        else {
            if (day > daysInMonth[month-1]){
                day = 1;
                month = month + 1;
            }
        }
    }   if (month>12){
        month = 1;
        year = year + 1;
    }
    
    return { day , month , year}
}
function getNextDateForPalindrome(date){
    var ctr = 0;
    var nextDate = getNextDate(date);
    while (i){
        if (checkPalindromeForDiffFormats(nextDate)){
            break;
        } else {
            nextDate = getNextDate(nextDate);
        }
    }
    return {ctr,nextDate}
}


function clickHandler (){
    console.log( checkPalindromeForDiffFormats(date))
    console.log(getNextDateForPalindrome(date))
}

checkBttn.addEventListener("click",clickHandler);
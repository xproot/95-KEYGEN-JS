/*95-KEYGEN-JS - rewritten by xproot (https://github.com/xproot) - original python version and some explaining by sashi (https://github.com/SashiDegodeshi) (https://github.com/SashiDegodeshi/w95keygen-python)
no console is used to remain compability to those old browsers*/
//DECLARATIONS
function generateMsSerial(ver) {
    if (ver == "oem") {
        //if generateMsSerial("oem") then
        //make some variables 0, (just to generate the variables)
        var generatedKey = 0;
        var totalSum = 0;
        var randomDay = 0;
        //generate a valid date
        //array of valid years
        var yearArray = ["95", "96", "97", "98", "99", "00", "01", "02", "03"];
        //choose a random year from the array
        var randomYear = String(yearArray[Math.floor(Math.random() * yearArray.length)]);
        //make a random day
        var aRandomDay = String(parseInt(Math.random() * (366 - 001) + 001));
        //format the day to XXX
        if (aRandomDay <= 9)
            randomDay = '00' + aRandomDay;
        else if (aRandomDay <= 99)
            randomDay = '0' + aRandomDay;
        else
            randomDay = aRandomDay;
        //format the day and year to XXXXX
        var randomDate = randomDay + "" + randomYear;
        //generate a random number and convert it to string
        var randomNumber = String(Math.random());
        //take only the revelant parts of the random number (why does this generate a valid KEY??)
        var generatedFullKey = randomNumber.substr(2, 12);
        var middleSeven = "0" + "" + String(generatedFullKey.substr(3, 6));
        var sevenLast = parseInt(middleSeven.substr(6, 7));
        var lastFive = randomNumber.substr(12, 5)

        //for every character in middleSeven sum it in totalSum
        for (var i = 0; i < middleSeven.length; i++)
            totalSum = totalSum + parseInt(middleSeven.substr(i, 1))

        if (sevenLast >= 8)
            //check if the last digit of middleSeven is greater than or equal to 8 and try again if it is
            return generateMsSerial('oem');
        else if (sevenLast == 0)
            //check if the last digit of middleSeven is 0 and try again if it is
            return generateMsSerial('oem');
        else if (parseInt(totalSum) % 7 == 0) {
            //if the total sum of middleSeven is divisible by 7 then
            //format it to XXXXX-OEM-XXXXXXX-XXXXX
            generatedKey = randomDate + "-OEM-" + middleSeven + "-" + lastFive;
            //return the key
            return generatedKey;
        } else
            //else then try again
            return generateMsSerial('oem');
        return generatedKey;
    } else {
        //else then
        //make some variables 0, (just to generate the variables)
        var generatedKey = 0;
        var totalSum = 0;
        //generate a random number and convert it to string
        var randomNumber = String(Math.random());
        //take only the revelant parts of the random number (why does this generate a valid KEY??)
        var generatedFullKey = randomNumber.substr(2, 12);
        var firstThree = generatedFullKey.substr(0, 3);
        var lastSeven = generatedFullKey.substr(3, 7);
        var sevenLast = parseInt(lastSeven.substr(6, 7));
        //generate an array of bad numbers
        var uselessThree = [333, 444, 555, 666, 777, 888, 999];

        //for every character in lastSeven sum it in totalSum
        for (var i = 0; i < lastSeven.length; i++)
            totalSum = totalSum + parseInt(lastSeven.substr(i, 1))

        if (uselessThree.indexOf(parseInt(firstThree)) !== -1)
            //check if our firstThree are in this array and if it is try again
            return generateMsSerial();
        else if (sevenLast >= 8)
            //check if the last digit of lastSeven is greater than or equal to 8 and try again if it is
            return generateMsSerial();
        else if (sevenLast == 0)
            //check if the last digit of lastSeven is 0 and try again if it is
            return generateMsSerial();
        else if (parseInt(totalSum) % 7 == 0) {
            //if the total sum of lastSeven is divisible by 7 then
            //format it to XXX-XXXXXXX
            generatedKey = firstThree + "-" + lastSeven;
            //return the key
            return generatedKey;
        } else
            //else then try again
            return generateMsSerial();
    }
}

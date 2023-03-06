function scriptTest()
{ 
    alert("Script Is Running");
}

function dateAndTime()
{
    const date = new Date();
    date.setTime(date.getTime());
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
    const dateNumbers = [date.getFullYear(), daysOfTheWeek[date.getDay()], date.getDate(), monthsOfTheYear[date.getMonth()], date.getTime(), date.getHours(), date.getMinutes()];
    if (dateNumbers[6] < 10)
    {
        let currentDate = `Today is ${dateNumbers[5]-12}:0${dateNumbers[6]} on ${dateNumbers[1]}, ${dateNumbers[2]} ${dateNumbers[3]}, ${dateNumbers[0]}`;
        document.getElementById("datePlacement").textContent = currentDate;
    } 

    else 
    {
        let currentDate = `Today is ${dateNumbers[5]-12}:${dateNumbers[6]} on ${dateNumbers[1]}, ${dateNumbers[2]} ${dateNumbers[3]}, ${dateNumbers[0]}`;
        document.getElementById("datePlacement").textContent = currentDate;
    }
}

function formUserGreeting()
{
    let userName = document.getElementById("formName").value;
    let userFeel = document.getElementById("formFeel").value;
    document.getElementById("greetUserScriptOutput").textContent = `The Oracle Frog Herman welcomes you, ${userName}!\nWe're glad you are feeling ${userFeel}.`;
}

function generateNumber()
{
    let randomNumber = Math.floor(Math.random() * 9999);
    document.getElementById("randomNumber").textContent = randomNumber;
}

function convertKmtoMi()
{
    document.getElementById("convertionOutput").textContent = "";
    let miles = document.getElementById("miles").value;
    let kilometers = document.getElementById("kilometers").value;

    if (miles == "")
    {
        if (kilometers == "")
        {
            document.getElementById("convertionOutput").textContent = "Make sure to enter one number";
        }
        else 
        {
            document.getElementById("convertionOutput").textContent = kilometers/1.609 + " Miles";
        }
    } 
    else 
    {
        document.getElementById("convertionOutput").textContent = miles*1.609 + " Kilometers";
    }
}

function calculator() 
{
    let numberOne = document.getElementById("firstNum").value;
    let numberTwo = document.getElementById("secondNum").value;
    let sum = parseInt(numberOne)+parseInt(numberTwo);
    document.getElementById("calcOutput").textContent = sum;
}

function freeFallCalculator() 
{
    let secondsTraveled = document.getElementById("dropTime").value;
    let gravitationMS = 9.80665;
    let freeFallSpeed = gravitationMS*secondsTraveled;
    let freeFallDistance = 0.5 * gravitationMS * Math.pow(secondsTraveled, 2);
    document.getElementById("freeFallOutput").textContent = `Speed of Travel: ${freeFallSpeed} m/s | Distance: ${freeFallDistance} m`;
}

function fortuneCookie()
{
    const fortunes = [
        "The greatest risk is not taking one.",
        "Let the deeds speak.",
        "Be on the lookout for coming events; They cast their shadows beforehand.",
        "Adversity is the parent of virtue.",
        "Never give up. You're not a failure if you don't give up.",
        "You will conquer obstacles to achieve success.",
        "People are naturally attracted to you.",
        "Its amazing how much good you can do if you dont care who gets the credit.",
        "You will be called in to fulfill a position of high honor and responsibility.",
        "The man or woman you desire feels the same about you.",
        "Joys are often the shadows, cast by sorrows.",
        "Never give up. You're not a failure if you don't give up.",
        "The greatest risk is not taking one.",
        "Adversity is the parent of virtue.",
        "If you have something good in your life, don't let it go!",
        "Meeting adversity well is the source of your strength.",
        "A very attractive person has a message for you.",
        "Never give up. You're not a failure if you don't give up.",
        "You can make your own happiness.",
        "Your ability for accomplishment will follow with success.",
        "Let the deeds speak.",
        "People are naturally attracted to you.",
        "A stranger, is a friend you have not spoken to yet.",
        "The greatest risk is not taking one.",
        "You can make your own happiness.",
        "You will be called in to fulfill a position of high honor and responsibility.",
        "There is no greater pleasure than seeing your loved ones prosper.",
        "You learn from your mistakes... You will learn a lot today.",
        "You will travel to many exotic places in your lifetime.",
        "You will marry your lover.",
        "You already know the answer to the questions lingering inside your head.",
        "The man on the top of the mountain did not fall there.",
        "Let the deeds speak.",
        "The man or woman you desire feels the same about you.",
        "You will become great if you believe in yourself.",
        "Meeting adversity well is the source of your strength.",
        "Jealousy doesn't open doors, it closes them!",
        "It is now, and in this world, that we must live.",
        "There is no greater pleasure than seeing your loved ones prosper."]

        let generatedFortune = fortunes[Math.floor(Math.random() * 38)];
        document.getElementById("fortuneCookie").textContent = generatedFortune;
}
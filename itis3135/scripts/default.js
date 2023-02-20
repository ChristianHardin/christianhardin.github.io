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


// Below controls the side navigation bar 
function sideLinkHover()
{
    const elementsToChange = ["side1",
                              "side2",
                              "side3", 
                              "side4",
                              "side5",
                              "side6",
                              "side7",
                              "side8",
                              "side9",
                              "side10"];
                              
    const contextChange = ["Home", 
                           "Introduction",
                           "ITIS-3135 Archive", 
                           "HTML Table",
                           "HTML Form", 
                           "Crappy Site",
                           "Website Evaluations",
                           "First Scripts",
                           "HTML Validation",
                           "CSS Validation"];
    for (let i = 0; i < elementsToChange.length; i++) 
    {
        document.getElementById(elementsToChange[i]).textContent = contextChange[i];
    }
}

function sideLinkOff()
{
    const elementsToChange = ["side1",
                              "side2",
                              "side3", 
                              "side4",
                              "side5",
                              "side6",
                              "side7",
                              "side8",
                              "side9",
                              "side10"];
    for (let i = 0; i < elementsToChange.length; i++) 
    {
        document.getElementById(elementsToChange[i]).textContent = "";
    }
}

function text() {
    var path = window.location.pathname;
    var name = path.split("/").pop();
    alert(name);
}

// Navigation Bar
function sideNavbar() { // FOR INDEX PAGE ONLY
    let path = window.location.pathname;
    let fileName = path.split("/").pop();



    if (fileName == ""){
        const navbarElements = [
            "<a href='./' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/home.svg' alt='home-ico' width='45' height='45'></div><div id='side1' class='context'></div></div></a>",
            "<a href='./itis3135/introduction.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/profile.svg' alt='profile-ico' width='45' height='45'></div><div id='side2' class='context'></div></div></a>",
            "<a href='./itis3135/itis3135.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/archive.svg' alt='archive-ico' width='45' height='45'></div><div id='side3' class='context'></div></div></a>",
            "<a href='./itis3135/tables.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/table.svg' alt='table-ico' width='45' height='45'></div><div id='side4' class='context'></div></div></a>",
            "<a href='./itis3135/forms.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/form.svg' alt='form-ico' width='45' height='45'></div><div id='side5' class='context'></div></div></a>",
            "<a href='./itis3135/cr@@p p y.htm' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/site.svg' alt='site-ico' width='45' height='45'></div><div id='side6' class='context'></div></div></a>",
            "<a href='./itis3135/website_evaluations.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/evalutation.svg' alt='evaluation-ico' width='45' height='45'></div><div id='side7' class='context'></div></div></a>",
            "<a href='./itis3135/firstscripts.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/JS.svg' alt='js-ico' width='45' height='45'></div><div id='side8' class='context'></div></div></a>",
            "<a href='https://validator.w3.org/check?uri=referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/html-icon.svg' alt='html-ico' width='45' height='45'></div><div id='side9' class='context'></div></div></a>",
            "<a href='https://jigsaw.w3.org/css-validator/check/referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/css-icon.svg' alt='css-ico' width='45' height='45'></div><div id='side10' class='context'></div></div></a>"
        ]

        let navbar = "";
        for (let i = 0; i < navbarElements.length; i++) {
            navbar = navbar + navbarElements[i];
        }
        document.getElementById("sideNavigationBar").innerHTML = navbar
    } else {
        const navbarElements = [
            "<a href='../' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/home.svg' alt='home-ico' width='45' height='45'></div><div id='side1' class='context'></div></div></a>",
            "<a href='./introduction.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/profile.svg' alt='profile-ico' width='45' height='45'></div><div id='side2' class='context'></div></div></a>",
            "<a href='./itis3135.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/archive.svg' alt='archive-ico' width='45' height='45'></div><div id='side3' class='context'></div></div></a>",
            "<a href='./tables.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/table.svg' alt='table-ico' width='45' height='45'></div><div id='side4' class='context'></div></div></a>",
            "<a href='./forms.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/form.svg' alt='form-ico' width='45' height='45'></div><div id='side5' class='context'></div></div></a>",
            "<a href='./cr@@p p y.htm' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/site.svg' alt='site-ico' width='45' height='45'></div><div id='side6' class='context'></div></div></a>",
            "<a href='./website_evaluations.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/evalutation.svg' alt='evaluation-ico' width='45' height='45'></div><div id='side7' class='context'></div></div></a>",
            "<a href='./firstscripts.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/JS.svg' alt='js-ico' width='45' height='45'></div><div id='side8' class='context'></div></div></a>",
            "<a href='https://validator.w3.org/check?uri=referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/html-icon.svg' alt='html-ico' width='45' height='45'></div><div id='side9' class='context'></div></div></a>",
            "<a href='https://jigsaw.w3.org/css-validator/check/referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/css-icon.svg' alt='css-ico' width='45' height='45'></div><div id='side10' class='context'></div></div></a>"
        ]

        let navbar = "";
        for (let i = 0; i < navbarElements.length; i++) {
            navbar = navbar + navbarElements[i];
        }
        document.getElementById("sideNavigationBar").innerHTML = navbar
    } 
}

// Controls the bottom navigation bar to add link to thehardinguild.com


/* <div class="footernav">
            
                
             */
function bottomNav() {
    let navbar = []
    let bottomNav = [
                "<a href='https://webpages.charlotte.edu/chardi28/' class='footlink'>CLTSite</a>",
                "<a href='https://github.com/ChristianHardin' class='footlink'>GitHub</a>",
                "<a href='https://christianhardin.github.io/' class='footlink'>GitHub.io</a>",
                "<a href='https://github.com/ChristianHardin/ITIS-3135' class='footlink'>Github Course</a>",
                "<a href='https://www.freecodecamp.org/Christian_Hardin' class='footlink'>FreeCodeCamp</a>",
                "<a href='https://www.codecademy.com/profiles/mega8605263637' class='footlink'>CodeAcademy</a>",
                "<a href='https://www.linkedin.com/in/christian-hardin-a313481b9' class='footlink'>LinkedIn</a>",
                "<a href='https://thehardinguild.com/'' class='footlink'>Made By ©2023 The Hardin Guild</a>"
    ]
    for (let i = 0; i < bottomNav.length; i++) {
        navbar = navbar + bottomNav[i];
    }
    document.getElementById("footlinksdiv").innerHTML = navbar;
}
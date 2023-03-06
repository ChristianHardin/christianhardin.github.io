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
                              "side10",
                              "side11",
                              "side12"];
                              
    const contextChange = ["Home", 
                           "Introduction",
                           "ITIS-3135 Archive", 
                           "HTML Table",
                           "HTML Form", 
                           "Crappy Site",
                           "Website Evaluations",
                           "First Scripts",
                           "Polygon",
                           "Calculator",
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
                              "side10",
                              "side11",
                              "side12"];
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
            "<a href='./itis3135/polygon.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/pentagon_icon.svg' alt='pentagon-ico' width='45' height='45'></div><div id='side9' class='context'></div></div></a>",
            "<a href='./itis3135/calculator_try.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/calculator.svg' alt='calculator-ico' width='45' height='45'></div><div id='side10' class='context'></div></div></a>",
            "<a href='https://validator.w3.org/check?uri=referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/html-icon.svg' alt='html-ico' width='45' height='45'></div><div id='side11' class='context'></div></div></a>",
            "<a href='https://jigsaw.w3.org/css-validator/heck/referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./itis3135/images/css-icon.svg' alt='css-ico' width='45' height='45'></div><div id='side12' class='context'></div></div></a>"        ]

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
            "<a href='./polygon.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/pentagon_icon.svg' alt='pentagon-ico' width='45' height='45'></div><div id='side9' class='context'></div></div></a>",
            "<a href='./calculator_try.html' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/calculator.svg' alt='calculator-ico' width='45' height='45'></div><div id='side10' class='context'></div></div></a>",
            "<a href='https://validator.w3.org/check?uri=referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/html-icon.svg' alt='html-ico' width='45' height='45'></div><div id='side11' class='context'></div></div></a>",
            "<a href='https://jigsaw.w3.org/css-validator/check/referer' class='sidelink'> <div class='link-content'> <div class='icon'><img src='./images/css-icon.svg' alt='css-ico' width='45' height='45'></div><div id='side12' class='context'></div></div></a>"
        ]

        let navbar = "";
        for (let i = 0; i < navbarElements.length; i++) {
            navbar = navbar + navbarElements[i];
        }
        document.getElementById("sideNavigationBar").innerHTML = navbar
    } 
}

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
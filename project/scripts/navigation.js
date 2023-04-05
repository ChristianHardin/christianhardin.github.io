// https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe

docReady(function(){
    createSideNav();
});

function createSideNav() {
    let jsonObj;
    fetch('./assets/data/navigation.json')
        .then(response => response.json())
        .then(data => jsonObj = data)
        .then(() => {
            console.log(jsonObj);
            // Do stuff here
            const sideNavigation = document.getElementById('sideNavigation');
            let tempRef = document.createElement('h1');
            tempRef.appendChild(document.createTextNode('Royal Arena'));
            sideNavigation.append(tempRef)
            tempRef = document.createElement('div');
            tempRef.className = 'line01';
            sideNavigation.append(tempRef);
            tempRef = document.createElement('ul');
            tempRef.className = 'navigationList';
            for (let i = 0; i < jsonObj.length; i++) {
                let newLi = document.createElement('li');
                newLi.className = 'navigationListItem';
                let newA = document.createElement('a');
                newA.className = 'navigationLink';
                newA.setAttribute('href', jsonObj[i].url);
                let newImg = document.createElement('img');
                newImg.className = 'navigationLinkIcon';
                let newText = document.createElement('h1');
                newImg.className = 'navigationLinkText';
                newText.appendChild(document.createTextNode(jsonObj[i].text));
                newA.appendChild(newImg);
                newA.appendChild(newText);
                newLi.appendChild(newA);
                tempRef.appendChild(newLi);
            }
            sideNavigation.appendChild(tempRef);

        });
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
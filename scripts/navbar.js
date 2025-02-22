let navItems = [
  { label: "Link Tree", url: "./linkTree.html" },
];

// Function to populate the navlinks div with buttons
function populateNavLinks() {
  const navLinksContainer = document.querySelector("#navlinks");

  // Clear existing buttons (in case you are rerunning the script)
  navLinksContainer.innerHTML = "";

  // Loop through the navItems and create a button for each item
  navItems.forEach(item => {
    const button = document.createElement("button");
    button.classList.add("navButton");
    button.textContent = item.label;
    button.onclick = () => window.location.href = item.url;
    
    // Append the button to the navlinks container
    navLinksContainer.appendChild(button);
  });
}

// Call the function to populate the navlinks when the page loads
document.addEventListener("DOMContentLoaded", populateNavLinks);

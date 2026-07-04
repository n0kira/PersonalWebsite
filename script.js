const discoverBtn = document.getElementById('discover');
const detailsTxt = document.getElementById('details');

let isActive = false;

discoverBtn.addEventListener("click", () => {
    if (!isActive) {
        discoverBtn.textContent = "Hide Details";
        detailsTxt.style.display = "block";
        isActive = true;
    } else {
        discoverBtn.textContent = "Click here to know more!";
        detailsTxt.style.display = "none";
        isActive = false;
    }
})

// Create the HTML for the banner

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 

`<div class="main__alert__banner"> 
<p>
<strong>Alert:</strong> You have <strong>6</strong> overdue tasks to 
complete.
</p>
<p class="main__alert__banner__close">x</p>
</div>`

// Add click event to the alert banner
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("main__alert__banner__close")) {
        alertBanner.style.display = "none";
    }
    
});

// Chart Widgets (Line Graph)
const trafficChart = document.getElementById("traffic-chart");
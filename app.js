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
const trafficCanvas = document.getElementById("traffic-chart");
console.log(trafficCanvas);

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
            pointBackgroundColor: `rgba(255,255,255)`,
            pointBorderColor: 'rgba(116, 119, 191, 1)',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 2,
            lineTension: 0

        }]
    };
    
    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 1500
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        },
    
    };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily Bar (Chart)
const dailyCanvas = document.getElementById("daily-chart");
    
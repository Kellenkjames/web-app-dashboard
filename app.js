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
            2100],
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
        responsive: true,
        maintainAspectRatio: false,
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
    
    // Daily Chart (Bar)
    const dailyCanvas = document.getElementById("daily-chart");
    
    // data for daily traffic bar chart
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
            barPercentage: .6,
            
        }]
    };
    const dailyOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    }
    
    let dailyChart = new Chart(dailyCanvas, {   
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        
    });
    
    // Mobile Users (Pie Chart)
    const mobileCanvas = document.getElementById("mobile-users");
    
    const mobileData = {
        labels: ["Phones", "Tablet", "Desktop"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    };
    
    const mobileOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                padding: 20,
                fontSize: 16,
                fontStyle: 'normal'
            }
        }
    }
    
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        
    });
    
    // Messaging Section
    const user = document.getElementById("userField");
    const message = document.getElementById("messageField");
    const send = document.getElementById("send");
    
    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
            alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
            alert("Please fill out message field before sending");
        } else {
            alert(`Message successfully sent to: ${user.value}`);
        }
    });
    
    
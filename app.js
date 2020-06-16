// Chart Widgets (Line Graph)
const trafficCanvas = document.getElementById("traffic-chart");

// Navigation (grabbing elements that we will toggle)
const trafficNav = document.getElementById("traffic");

// List Items
const trafficHourly = document.querySelector(".traffic #hourly");
const trafficDaily = document.querySelector(".traffic #daily");
const trafficWeekly = document.querySelector(".traffic #weekly");
const trafficMonthly = document.querySelector(".traffic #monthly");

// Alert Banner
const alertBanner = document.getElementById("alert");

// Notifications
const notificationTrigger = document.querySelector("#iconTrigger");
const notificationsDropdown = document.querySelector(".header__container__notifications");

// Global instance of chart
var myChart;

// Trigger dropdown from Notification Icon
document.addEventListener('click', e => {
    
    const element = e.target;
    
    if (element === notificationTrigger && notificationsDropdown.style.display === "none" || element.matches(".header__container__notifications") || element.matches(".header__container__notifications__header") || element.matches(".header__container__notifications__header__title") || element.matches(".header__container__notifications__header__number") || element.matches(".header__container__notifications__member") || element.matches(".header__container__notifications__member__img") || element.matches(".header__container__notifications__member__desc")) {
        notificationsDropdown.style.display = "block";
    }
    else {
        notificationsDropdown.style.display = "none";
    }
    
});

// Create the HTML for the banner
alertBanner.innerHTML = `<div class="main__alert__banner"> 
<p>
<strong>Alert:</strong> You have <strong>5</strong> overdue tasks to 
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

/* TRAFFIC LINE CHARTS */

// Default Chart (Weekly)

function addWeeklyData() {
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500
            ],
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
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    };
    myChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
    
}

// Add Hourly Data
function addDataHourly() {
    
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 2400, 1500, 500, 800, 1250, 1750, 900, 2250, 1500, 3000
            ],
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
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    };
    myChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
}

// Add Daily Data 
function addDataDaily() {
    
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [950, 1500, 500, 1000, 1500, 1350, 1250, 900, 1200, 500, 1400
            ],
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
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    };
    myChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
}

// Add Monthly Data
function addMonthlyData() {
    
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500
            ],
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
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        },
    };
    myChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
    
    
}

// Weekly Chart will be called by default
addWeeklyData();

// Set listeners on buttons 
trafficHourly.addEventListener('click', addDataHourly);
trafficDaily.addEventListener('click', addDataDaily);
trafficWeekly.addEventListener('click', addWeeklyData);
trafficMonthly.addEventListener('click', addMonthlyData);

// HELPER FUNCTION [Managing the active navigation items on the TRAFFIC Chart]
// Get all the li's with inside the traffic nav container
let trafficListItems = document.querySelectorAll('.traffic__nav li');

// Loop through the li's and add the active class to the current/clicked button
for (let i = 0; i < trafficListItems.length; i++) {
    trafficListItems[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("active");
        
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        
        // Add the active class to the current/clicked button
        this.className += " active";
        
    })
    
}

/* BAR AND DOUGHNUT CHARTS */

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
                beginAtZero: true
            }
        }]
    },
    legend: {
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
        backgroundColor: ['#7477BF', '#78CF82', '#51B6C8']
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
send.addEventListener('click', (e) => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        e.preventDefault();
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
        e.preventDefault();
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
        e.preventDefault();
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

// AUTOCOMPLETE FEATURE ["Search for User Box"]

$( function() {
    var availableTags = [
        "Victoria Chambers",
        "Dale Byrd",
        "Dawn Wood",
        "Dan Oliver"
    ];
    $( "#userField" ).autocomplete({
        source: availableTags
    });
} );

// LOCAL STORAGE [SETTINGS] 

const settings = document.getElementById('settings');

settings.addEventListener('click', e => {
    
    const element = e.target;
    
    const saveButton = document.getElementById("save");
    const cancelButton = document.getElementById("cancel");

    const checkbox = document.getElementById("checkbox");
    
    // If the element is checked, save the user settings 

    if (checkbox.checked) {

        // Save the HTML to localStorage
        localStorage.setItem("emailNotifications", checkbox.value);
        
    }
    
}, false);

// Check for saved settings 
const saved = localStorage.getItem("emailNotifications");

// If there are any saved items, update our settings
if (saved) {
    checkbox.checked = saved;
}



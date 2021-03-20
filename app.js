// Traffic charts

const trafficCanvas = document.getElementById ("traffic-chart");
const hourlyButton = document.getElementById ("hourly");
const dailyButton = document.getElementById ("daily");
const weeklyButton = document.getElementById ("weekly");
const monthlyButton = document.getElementById ("monthly");
const buttons = document.querySelectorAll('.traffic-nav-link');

let trafficDataDefault = {
	labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
	datasets: [{
		data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		backgroundColor: 'rgba(116, 119, 191, .3',
		borderWidth: 1,
	}]
};

let trafficDataHourly = {
	labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
	datasets: [{
		data: [0, 1, 0, 0, 0, 0, 0, 1, 2, 5, 6, 5, 4, 11, 12, 7, 5, 6, 9, 7, 5, 4, 1, 1],
		backgroundColor: 'rgba(116, 119, 191, .3',
		borderWidth: 1,
	}]
};

let trafficDataDaily = {
	labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
		data: [92, 84, 72, 53, 60, 98, 64, 82, 49, 51, 80, 89, 32, 73, 81, 90, 102, 65, 67, 84, 35, 20, 64, 68, 45, 56, 88, 32, 67, 85, 68],
		backgroundColor: 'rgba(116, 119, 191, .3',
		borderWidth: 1,
	}]
};

let trafficDataWeekly = {
	labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
	datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
		backgroundColor: 'rgba(116, 119, 191, .3',
		borderWidth: 1,
	}]
};

let trafficDataMonthly = {
	labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	datasets: [{
		data: [3000, 4000, 2000, 3500, 5500, 4500, 2500, 3000, 6000, 3000, 1000, 4000   ],
		backgroundColor: 'rgba(116, 119, 191, .3',
		borderWidth: 1,
	}]
};

let trafficOptions = {
	aspectRatio: 2.5,
	animation: {
		duration: 0
	},
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	},
	legend: {
		display: false
	}
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficDataDefault,
	options: trafficOptions
});

hourlyButton.addEventListener('click', () => {
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    hourlyButton.style.backgroundColor = 'lightgreen';
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataHourly,
        options: trafficOptions
    });
})

dailyButton.addEventListener('click', () => {
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    dailyButton.style.backgroundColor = 'lightgreen';
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataDaily,
        options: trafficOptions
    });
})

weeklyButton.addEventListener('click', () => {
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    weeklyButton.style.backgroundColor = 'lightgreen';
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataWeekly,
        options: trafficOptions
    });
})

monthlyButton.addEventListener('click', () => {
    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    monthlyButton.style.backgroundColor = 'lightgreen';
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficDataMonthly,
        options: trafficOptions
    });
})

// daily chart

const dailyCanvas = document.getElementById("daily-chart");

let dailyData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [{
        label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1,
	}]
};

let dailyOptions = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	},
	legend: {
		display: false
	}
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileCanvas = document.getElementById("mobile-chart");

let mobileData = {
	labels: ["Desktop", "Tablet", "Phones"],
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
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending');
    } else if (message.value === '') {
        alert('Please fill out message field before sending');
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
})

const bell = document.getElementById('bell');
const dot = document.getElementById('dot');
const menu = document.getElementById('myDropdown');

bell.addEventListener('click', (e) => {
    const element = e.target;
    if ( element.classList.contains('bell-svg') ) {
        dot.style.display = 'none';
        menu.style.display = 'block';
    }
})

const emailBox = document.getElementById('email-box');
const publicBox = document.getElementById('public-box');
const timezone = document.getElementById('timezone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

if ( window.localStorage.getItem('timezone') ) {
    timezone.value = window.localStorage.getItem('timezone');
};

if ( window.localStorage.getItem('email') ) {
    emailBox.checked = true ;
};

if ( window.localStorage.getItem('public') ) {
    publicBox.checked = true ;
};

save.addEventListener('click', () => {
    window.localStorage.setItem('timezone', timezone.value);
    if ( emailBox.checked && publicBox.checked ) {
        window.localStorage.setItem('email', 'true');
        window.localStorage.setItem('public', 'true');
    } else if ( emailBox.checked ) {
        window.localStorage.setItem('email', 'true');
    } else if ( publicBox.checked ) {
        window.localStorage.setItem('public', 'true');
    }
})

cancel.addEventListener('click', () => {
    window.localStorage.clear()
})
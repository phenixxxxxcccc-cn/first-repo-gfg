var bell = document.getElementById("bell");
var timerId = null;

function scheduleBell(period) {
	var timeInput = document.getElementById(period);
	var timeValue = timeInput.value;
	
	if (timeValue) {
		localStorage.setItem(period, timeValue);
		alert("Bell scheduled for " + timeValue + ".");
	}
}

function startBell() {
	var period1Time = localStorage.getItem("period1");
	var period2Time = localStorage.getItem("period2");
	var period3Time = localStorage.getItem("period3");
	
	if (period1Time && period2Time && period3Time) {
		var now = new Date();
		var period1Date = new Date(now.toDateString() + " " + period1Time);
		var period2Date = new Date(now.toDateString() + " " + period2Time);
		var period3Date = new Date(now.toDateString() + " " + period3Time);
    }
}
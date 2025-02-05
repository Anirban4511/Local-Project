document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        document.getElementById("time").textContent = timeString;
    }

    function updateDate() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
        document.getElementById("date").textContent = formattedDate;
    }

    setInterval(updateTime, 1000);
    updateTime();
    updateDate();
    const speedDisplay = document.getElementById("speed");
    const unitOne=document.getElementById("unit");

function updateSpeed() {
    let speed = Math.random() * 999; // Generate random speed between 0 and 999 KB/S
    unit = "KB/S";
    
    if (speed >= 1000) {
        speed /= 1000; // Convert to MB/S if speed >= 1000 KB/S
        unit = "MB/S";
    }
    
    speedDisplay.textContent = speed.toFixed(2);
    unitOne.textContent=unit;
}

setInterval(updateSpeed, 500); // Update speed every 500ms
});

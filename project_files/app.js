function handleKeyPress(event) {
    if (event.key === 'Enter') {
        var name = document.getElementById('nameInput').value;
        if (name) {
            var timeBasedGreetingElement = document.getElementById('timeBasedGreeting');
            var fullMessage = 'Good ' + getTimeOfDay() + ', ' + name + '.';
            timeBasedGreetingElement.style.display = 'block'; // Show the element
            timeBasedGreetingElement.innerHTML = ''; // Clear previous message
            typeWriterEffect(timeBasedGreetingElement, fullMessage, 0);
            document.getElementById('habitCards').style.display = 'grid'; // Display the habit cards
        }
    }
}

function typeWriterEffect(element, message, index) {
    if (index < message.length) {
        element.innerHTML += message.charAt(index);
        index++;
        setTimeout(function() {
            typeWriterEffect(element, message, index);
        }, 100); // Adjust the typing speed by changing the timeout duration
    }
}

function getTimeOfDay() {
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    if (hour < 5 || (hour === 5 && minute < 30)) {
        return 'early morning';
    } else if (hour < 12) {
        return 'morning';
    } else if (hour < 17 || (hour === 17 && minute < 30)) {
        return 'afternoon';
    } else if (hour < 20 || (hour === 20 && minute < 30)) {
        return 'evening';
    } else {
        return 'night';
    }
}


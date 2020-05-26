const ulRoomList = document.getElementById('roomList');
const ulEmployeeList = document.getElementById('employeeList');
const alertBox = document.getElementById("alertbox");
const alertColorsArray = ['#5fcf80', '#ed5a5a'];

alertBox.style.display = 'none';

function diplayAlert(element, value, bgColor, text='') {
    if (element == 'rooms') {
        alertBox.innerHTML = ` \n        <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">×</span> \n        <strong>Room ${value}:</strong> This room is ${text} available for meetings. \n`;
        alertBox.style.backgroundColor = bgColor;
        alertBox.style.display = '';
    } else if (element == 'employees') {
        alertBox.innerHTML = ` \n        <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">×</span> \n        <strong>${value}</strong> is ${text} in office. \n`;
        alertBox.style.backgroundColor = bgColor;
        alertBox.style.display = '';
    }
};

ulRoomList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (e.target.className === 'full') {
            e.target.className = 'empty';
            diplayAlert(e.target.parentNode.className, e.target.textContent, alertColorsArray[0], "now");
        }
        else {
            e.target.className = 'full';
            diplayAlert(e.target.parentNode.className, e.target.textContent, alertColorsArray[1], "no longer");
        }
    }
});

ulEmployeeList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (e.target.className === 'out') {
            e.target.className = 'in';
            diplayAlert(e.target.parentNode.className, e.target.textContent, alertColorsArray[0], "now");
        }
        else {
            e.target.className = 'out';
            diplayAlert(e.target.parentNode.className, e.target.textContent, alertColorsArray[1], "no longer");
        }
    }
});

console.log(alertBox);
//    
// Here we create our AJAX Object, this is the 1st step for making AJAX functional
const xhr = new XMLHttpRequest();
// This is the callback function for our AJAX Object, 2nd step.
xhr.onreadystatechange = function() {
    // Making sure that everything is good and loaded by the server
    if(xhr.readyState === 4) {
        // Adding a few references so that we can make our application intereactive
        const employeeList = document.getElementById('employeeList');
        const employees = JSON.parse(xhr.responseText);
        const ulElement = document.createElement('ul');
        ulElement.className = 'employees';
        employeeList.appendChild(ulElement);
        // Here we run through each JSON Object and depending on whether the
        // employee is in office or not, we give that element a out/in class name.
        // Then we set the textContent to the employee's name, and 
        // appending the li element to the ul element. We do this for each
        // JSON Object
        employees.forEach(element => {
            let liElement = document.createElement('li');
            if (element.inoffice === false) liElement.className = 'out';
            if (element.inoffice === true) liElement.className = 'in';
            liElement.textContent = element.name;
            ulElement.appendChild(liElement);
        });
    }
};
// This is the 3rd step for making AJAX working.
// We need to open a request and pass the necessary arguments
xhr.open('GET','data/employees.json');
// The final step, step 4, is actually sending our request to the web server
xhr.send();

// The following code is very similar to the previous
// Thus making comments for the following won't be necessary
// Read the comments above if you need clarification
const roomsStatus = new XMLHttpRequest();
roomsStatus.onreadystatechange = function() {
    if(roomsStatus.readyState === 4) {
        const roomList = document.getElementById('roomList');
        const rooms = JSON.parse(roomsStatus.responseText);
        const ulElement = document.createElement('ul');
        ulElement.className = 'rooms';
        roomList.appendChild(ulElement);
        rooms.forEach(room => {
            let liElement = document.createElement('li');
            if (room.available === false) liElement.className = 'full';
            if (room.available === true) liElement.className = 'empty';
            liElement.textContent = room.room;
            ulElement.appendChild(liElement);
        });
    }
};
roomsStatus.open('GET', 'data/rooms.json');
roomsStatus.send();
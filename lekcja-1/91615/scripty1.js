console.log("Hello, this is a message!");
console.log(42);
let myVariable = "This is a variable";
console.log(myVariable);

let myString = "hi scripts";
let myNumber = 100;
let myBoolean = true;

const PI = 3.14;
const siteName = "My Website";

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(PI);
console.log(siteName);

function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 10);
console.log(result);

document.getElementById("special").textContent = "Text changed by JavaScript!";

document.querySelector(".example").style.fontSize = "24px";

// Fetch data from JSONPlaceholder API
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        displayUserData(users);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('api-data').innerHTML = '<p style="color: red;">Error loading data. Please try again later.</p>';
    }
}

// Display user data in the HTML
function displayUserData(users) {
    const apiDataDiv = document.getElementById('api-data');

    // Clear loading message
    apiDataDiv.innerHTML = '';

    // Display only first 5 users
    const usersToDisplay = users.slice(0, 5);

    usersToDisplay.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        apiDataDiv.appendChild(userCard);
    });
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', fetchUserData);
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Tasks Example</title>
</head>
<body>
    <h1 id="main-heading">Welcome to JavaScript Tasks!</h1>
    <p class="description">This text will be styled by JavaScript.</p>

    <script>
        // ==============================
        // Basic Console Outputs
        // ==============================
        console.log("Hello from JavaScript!");  // message
        console.log(2025);                      // number
        let myVariable = "Learning JS is fun!";
        console.log(myVariable);                // variable


        // ==============================
        // Variables and Data Types
        // ==============================
        let userName = "Alice";       // string
        let userAge = 25;             // number
        const isStudent = true;       // boolean

        console.log("User:", userName);
        console.log("Age:", userAge);
        console.log("Is a student?", isStudent);


        // ==============================
        // Basic Functions
        // ==============================
        function addNumbers(a, b) {
            return a + b;
        }

        let sumResult = addNumbers(5, 10);
        console.log("The sum is:", sumResult);


        // ==============================
        // DOM Manipulation Basics
        // ==============================

        // Change text content of an element
        document.getElementById("main-heading").textContent = "Text Changed by JavaScript!";

        // Apply new style to an element
        document.querySelector(".description").style.color = "blue";
        document.querySelector(".description").style.fontWeight = "bold";
    </script>
</body>
</html>

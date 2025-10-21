document.getElementById("submitButton").addEventListener("click", function()
{
    console.log("Submit button got clicked!");
    alert("Button clicked");
}
);

let my_array = [];
const n = 10;
for (let i = 0; i < n; i++)
{
    my_array.push(i);
}

for (let i = 0; i < my_array.length; i++) {
    console.log(my_array[i]);
}

for (let i = 0; i < my_array.length; i++) {
    if (my_array[i] % 2 === 0) {
        console.log(`Event ${my_array[i]}`);
    } else {
        console.log(`Event ${my_array[i]}`);
    }
}


// change color of dive

document.getElementById("changecolorbutton").addEventListener("click", function() {
  document.getElementById("table").style.backgroundColor = "orange";
});
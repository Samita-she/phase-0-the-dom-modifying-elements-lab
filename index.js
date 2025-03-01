// Step 1: Remove the <main> element from the DOM
document.querySelector("main").remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of the new <h1> to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of <h1>
newHeader.textContent = "YOUR-NAME is the champion"; // Replace "YOUR-NAME" with your actual name

// Step 5: Append the new <h1> element to the body
document.body.append(newHeader);

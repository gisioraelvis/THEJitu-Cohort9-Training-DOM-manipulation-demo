// Grab the DOM elements i.e form, input, btn and list
const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.getElementById("submit");
const list = document.getElementById("list");

// Add an event listener to the form
form.addEventListener("submit", (e) => {
  // Prevent the form from submitting
  e.preventDefault();
  // Add the input value to the list
  addItem();
});

// Function to add item to the list
function addItem() {
  // Create a new list item
  const item = document.createElement("li");
  // Add the input value to the list item
  item.innerText = input.value;
  // Add the list item to the list
  list.appendChild(item);
}

// Add an event listener to the list
list.addEventListener("click", (e) => {
  // Remove the list item from the list
  removeItem(e.target);
});

// Function to remove item from the list
function removeItem(item) {
  // Check if the clicked item is a list item
  if (item.tagName === "LI") {
    // Remove the list item from the list
    list.removeChild(item);
  }
}

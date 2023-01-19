// Grab the DOM elements i.e form, input, btn and list
const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.getElementById("submit");
const list = document.getElementById("list");

// Items array
let itemsArray = [];

// Gets the input value and add it to the items array
form.addEventListener("submit", (e) => {
  e.preventDefault();
  itemsArray.unshift(input.value);
  displayItems();
  input.value = "";
});

// Read the items and display them on the page
function displayItems() {
  list.innerHTML = "";
  itemsArray.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`;
  });
}

// Remove an item from the items array and update the display list
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    itemsArray = itemsArray.filter((item) => item !== e.target.innerText);
    displayItems();
  }
});

// fetch items from API endpoint https://jsonplaceholder.typicode.com/todos
const fetchItems = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const items = await res.json();
  items.forEach((e) => itemsArray.unshift(e.title));
  displayItems();
};
fetchItems();

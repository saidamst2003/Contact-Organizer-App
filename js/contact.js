
const cards = document.getElementById("item-card");
const detail_section = document.getElementById("display-detail");
const display_section = document.getElementById("display-section");


// empty element in first side
const empty = document.getElementById("item-empty");
// empty element in second side
const display_empty = document.getElementById("display-empty");

const img = document.getElementById("card-profile");
const username = document.getElementById("card-username");
const phone = document.getElementById("card-phone");
let contactlist = [];

if (contactlist.length === 0) {
  // hide content
  cards.classList.add("d-none");
  detail_section.classList.add("d-none");
  display_section.classList.add("d-none");


  // display empty dialog
  empty.classList.add("d-flex");
  display_empty.classList.add("d-flex");
  console.error("empty list of contact");
} else {
  // hide content
  empty.classList.add("d-none");
  display_empty.classList.add("d-none");

  // display empty dialog
  cards.classList.add("d-flex");
  detail_section.classList.add("d-flex");
  display_section.classList.add("d-flex");


  afficher();
}

function ajouter() {}

function afficher() {}